import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { StoresInterface } from '../shared/interfaces/stores.interface';
import { Observable } from 'rxjs/internal/Observable';
import { v4 as UUID } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class StoreListDataService {
  constructor(private storageService: StorageService) {}

  //data holding objects
  public stores: StoresInterface[] = [];
  private storesGuids: string[] = [];

  //DB key values
  private storesGuidsKey: string = 'storesGuids';

  //Track status of DB
  public storageReady(): Observable<boolean> {
    return this.storageService.storageReady$;
  }

  //public CRUD functions

  //create
  public createNewStoreGuid(): Promise<string> {
    let currentStoreGuids: string[] = [];
    let guid = UUID();
    return Promise.all([
      this.storageService
        .get(this.storesGuidsKey)
        .then((val) => (val ? (currentStoreGuids = val) : val))
        .then(() => console.log(currentStoreGuids))
        .then(() => currentStoreGuids.push(guid))
        .then(() =>
          this.storageService.set(this.storesGuidsKey, currentStoreGuids)
        ),
    ]).then(() => guid);
  }

  public createNewStore(storeObject: StoresInterface): void {
    this.storageService
      .set(storeObject.guid, storeObject)
      .then(() => this.stores.push(storeObject))
      .then(() => this.sortStoresByPriority());
  }

  //read
  public getAllStores(): Promise<StoresInterface[] | null> {
    return Promise.all([
      this.storageService
        .get(this.storesGuidsKey)
        //if stores already exist modify the array accordingly
        .then((val) => (val ? (this.storesGuids = val) : val))
        .then(() => {
          if (this.storesGuids.length > 0) {
            //find all relevant stores by querying DB for guid as key and add to array
            this.storesGuids.forEach((guid) => {
              this.storageService
                .get(guid)
                .then((res) => this.stores.push(res));
            });
          }
        }),
    ])
      .then(() => this.sortStoresByPriority())
      .then(() => this.stores);
  }

  //update
  public updateStoreInfo(storeObject: StoresInterface): void {
    const storeIndex: number = this.stores.findIndex(
      (element) => element.guid === storeObject.guid
    );
    this.stores[storeIndex] = storeObject;
    this.sortStoresByPriority();
    this.storageService.set(storeObject.guid, storeObject);
  }

  //delete
  public deleteStore(guid: string): void {
    //remove from the guids to prevent issue was querying DB
    const guidIndex: number = this.storesGuids.findIndex(
      (element) => element === guid
    );
    this.storesGuids.splice(guidIndex, 1);
    //remove from the stores so that UI is updated accordingly
    const storeIndex: number = this.stores.findIndex(
      (element) => element.guid === guid
    );
    this.stores.splice(storeIndex, 1);
    //remove from DB
    Promise.all([
      this.storageService.set(this.storesGuidsKey, this.storesGuids),
      this.storageService.delete(guid),
    ]).then(() => this.sortStoresByPriority());
  }

  private sortStoresByPriority(): void {
    this.stores = this.stores.sort((a, b) => a.orderPriority - b.orderPriority);
  }
}
