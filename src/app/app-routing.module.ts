import { NgModule } from  '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuoteSearchComponent } from './feature/quote/quote-search/quote-search.component';
import { QuoteComponent } from './feature/quote/quote/quote.component';

import { CatalogSearchComponent } from './feature/catalog/catalog-search/catalog-search.component';
import { CatalogItemComponent } from './feature/catalog/catalog-item/catalog-item.component';

const appRoutes : Routes = [
  { path: "", component: QuoteSearchComponent, pathMatch: 'full'},
  { path: "quote", component: QuoteSearchComponent, pathMatch: 'full'},
  { path: "quote/:quoteId", component: QuoteComponent, pathMatch: 'full'},

  { path: "catalog", component: CatalogSearchComponent, pathMatch: 'full'},
  { path: "catalog/:catalogId", component: CatalogItemComponent, pathMatch: 'full'},
//  { path: "story", component: StoryComponent},
//  { path: "orders",  loadChildren: "./orders/orders.module#OrdersModule"},
//  { path: "menu", loadChildren: "./menus/menus.module#MenusModule"},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}