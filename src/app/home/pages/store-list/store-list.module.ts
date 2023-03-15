import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreListPageRoutingModule } from './store-list-routing.module';

import { StoreListPage } from './store-list.page';
import { NewStoreComponent } from './new-store/new-store.component';
import { SharedModule} from '../../shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreListPageRoutingModule,
    SharedModule,
  ],
  declarations: [StoreListPage, NewStoreComponent]
})
export class StoreListPageModule {}
