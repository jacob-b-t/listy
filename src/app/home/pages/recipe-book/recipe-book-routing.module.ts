import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipeBookPage } from './recipe-book.page';

const routes: Routes = [
  {
    path: '',
    component: RecipeBookPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeBookPageRoutingModule {}
