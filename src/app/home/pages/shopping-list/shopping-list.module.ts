import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShoppingListPageRoutingModule } from './shopping-list-routing.module';
import { SharedModule} from '../../shared/components/shared.module';

import { ShoppingListPage } from './shopping-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingListPageRoutingModule,
    SharedModule
  ],
  declarations: [ShoppingListPage]
})
export class ShoppingListPageModule {}
