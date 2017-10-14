import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { ResourceService } from "./shared/resource.service";
import { CatalogService } from "./shared/catalog.service";
import { CustomerService } from "./shared/customer.service";
import { QuoteService } from "./shared/quote.service";
import { ConstantsService } from "./shared/constants.service";

import { AppComponent } from './app.component';
import { CatalogSearchComponent } from './feature/catalog/catalog-search/catalog-search.component';
import { CatalogItemComponent } from './feature/catalog/catalog-item/catalog-item.component';
import { QuoteSearchComponent } from './feature/quote/quote-search/quote-search.component';
import { QuoteComponent } from './feature/quote/quote/quote.component';
import { CatalogSearchResultsComponent } from './feature/catalog/catalog-search-results/catalog-search-results.component';
import { QuoteSearchResultsComponent } from './feature/quote/quote-search-results/quote-search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogSearchComponent,
    CatalogItemComponent,
    QuoteSearchComponent,
    QuoteComponent,
    CatalogSearchResultsComponent,
    QuoteSearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ResourceService, CatalogService, QuoteService, CustomerService, ConstantsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
