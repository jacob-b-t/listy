import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FABComponent } from './fab.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [FABComponent],
  exports: [FABComponent]
})
export class FABModule {}
