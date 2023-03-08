import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'store-list',
        loadChildren: () => import('./pages/store-list/store-list.module').then( m => m.StoreListPageModule)
      },
      {
        path: 'shopping-list',
        loadChildren: () => import('./pages/shopping-list/shopping-list.module').then( m => m.ShoppingListPageModule)
      },
      {
        path: 'recipe-book',
        loadChildren: () => import('./pages/recipe-book/recipe-book.module').then( m => m.RecipeBookPageModule)
      },
      {
        path: '',
        redirectTo: 'store-list',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
