import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storageReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public storageReady$ = this.storageReady.asObservable();
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
   }

   async init(){
    const storage = await this.storage.create();
    this._storage = storage;
    this.storageReady.next(true);
   }

   public async set(key: string, value: any): Promise<void> {
    await this._storage?.set(key, value);
   }

   public async get(key: string) {
    return await this._storage?.get(key);
   }

   public async delete(key: string): Promise<void> {
    await this._storage?.remove(key);
   }
}
