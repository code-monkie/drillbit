import { Injectable } from '@angular/core';
import { ResourceService } from './resource.service';
import { ConstantsService } from './constants.service';
import { QuoteSummary } from './quote-summary';

@Injectable()
export class QuoteService {

  constructor(private resourceService: ResourceService, private constantsService: ConstantsService) { }

  getQuotes() {
    return this.resourceService.get(this.constantsService.getQuotesUrl());
  }

  getQuoteById(quoteId: string) {
    return this.resourceService.get(this.constantsService.getQuoteByIdUrl(quoteId));
  }

  findQuote(quoteSummary: QuoteSummary) {
    return this.resourceService.post(this.constantsService.getFindQuoteUrl(), quoteSummary);
  }
}
