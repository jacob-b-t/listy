import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { StoresInterface } from '../shared/interfaces/stores.interface';
import { Observable } from 'rxjs/internal/Observable';
import { v4 as UUID } from 'uuid';
import { BehaviorSubject } from 'rxjs';
import { mockStoreObject } from '../shared/mock-data/store.mock';

@Injectable({
  providedIn: 'root',
})
export class StoreListDataService {
  constructor(private storageService: StorageService) {}

  //data holding objects
  private stores: StoresInterface[] = [];
  private storesGuids: string[] = [];

  //Observables
  private storesSubject: BehaviorSubject<StoresInterface[]> = new BehaviorSubject([mockStoreObject]);
  public storesSubject$ = this.storesSubject.asObservable();

  //DB key values
  private storesGuidsKey: string = 'storesGuids';

  //Track status of DB
  public storageReady(): Observable<boolean> {
    return this.storageService.storageReady$;
  }

  //public CRUD functions

  //create
  //call the createNewStoreGuid first to add it to the array of guids and have the new stores guid returned
  //as a promise, use this returned guid in the new store creation
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

  //once createNewStoreGuide has resolved, use that returned as the object passed to the below function
  //along with the new store form to create a new store in the DB
  public createNewStore(storeObject: StoresInterface): void {
    this.storageService
      .set(storeObject.guid, storeObject)
      .then(() => this.stores.push(storeObject))
      .then(() => this.sortStoresByPriority())
      .then(() => this.storesSubject.next(this.stores));
  }

  //read
  public getAllStores(): Promise<boolean> {
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
      .then(() => this.storesSubject.next(this.stores))
      .then(() => true);
  }

  //update
  public updateStoreInfo(storeObject: StoresInterface): void {
    const storeIndex: number = this.stores.findIndex(
      (element) => element.guid === storeObject.guid
    );
    this.stores[storeIndex] = storeObject;
    this.sortStoresByPriority();
    this.storageService.set(storeObject.guid, storeObject)
    .then(() => this.storesSubject.next(this.stores))
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
    ]).then(() => this.sortStoresByPriority())
    .then(() => this.storesSubject.next(this.stores));
  }

  private sortStoresByPriority(): void {
    this.stores = this.stores.sort((a, b) => a.orderPriority - b.orderPriority);
  }
}
