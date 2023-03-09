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

  private stores: StoresInterface[] = [];
  private storesGuids: string[] = [];

  public storageReady(): Observable<boolean> {
    return this.storageService.storageReady$;
  }

  public getAllStores(): StoresInterface[] | null {
    this.storageService
      .get('storesGuids')
      .then((val) => (val ? (this.storesGuids = val) : val))
      .then((val) => {
        if (this.storesGuids.length > 0) {
          this.storesGuids.forEach((guid) => {
            this.storageService.get(guid).then((res) => this.stores.push(res));
          });
        }
      });
    return this.stores;
  }

  public createNewStoreGuid(): Promise<string> {
    let currentStoreGuids: string[] = [];
    let guid = UUID();
    return Promise.all(
      [
        this.storageService
        .get('storesGuids')
        .then((val) => (val ? currentStoreGuids = val : val))
        .then((val) => console.log(currentStoreGuids))
        .then((val) => currentStoreGuids.push(guid))
        .then((val) => this.storageService.set('storesGuids', currentStoreGuids))
      ]
    )
    .then(() => guid)
  }


}
