import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ConstantsService {

  private log = false;  
  private baseUrl: string = "http://localhost:8080/v1";

  private quoteUrl: string = this.baseUrl + "/quotes";
  private findQuoteUrl: string = this.baseUrl + "/quotes/find";
  private customerUrl: string = this.baseUrl + "/customers";
  private catalogUrl: string = this.baseUrl + "/catalogs";
  private loginUrl: string = this.baseUrl + "/auth/login";
  private logoutUrl: string = this.baseUrl + "/auth/logout";
  
  constructor() {}

  getQuotesUrl() {
      return this.fluentLog(this.quoteUrl);
  }

  getQuoteByIdUrl(quoteId: string) {
      return this.fluentLog(this.quoteUrl + "/" + quoteId);
  }

  getFindQuoteUrl() {
    return this.fluentLog(this.findQuoteUrl);
  }

  getCustomersUrl() {
    return this.fluentLog(this.customerUrl);
  }

  getCustomerByIdUrl(customerId: string) {
    return this.fluentLog(this.customerUrl + "/" +customerId);
  }

  getCatalogItemsUrl() {
    return this.fluentLog(this.catalogUrl);
  }

  getCatalogItemByIdUrl(altecPartNumber: string) {
    return this.fluentLog(this.catalogUrl + "/" +altecPartNumber);
  }

  getLoginUrl() {
      return this.fluentLog(this.loginUrl);
  }

  getLogoutUrl() {
      return this.fluentLog(this.logoutUrl);
  }

  fluentLog (path: string) {
      if (this.log === true){
        console.log(path);
      }
      return path;
  }
}