import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FABModule } from './fab/fab.module';

@NgModule({
  imports: [CommonModule, IonicModule, FABModule, FormsModule, ReactiveFormsModule],
  declarations: [],
  exports: [FABModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
