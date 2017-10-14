import { Component, OnInit } from '@angular/core';
import { QuoteSummary } from '../../../shared/quote-summary';
import { QuoteService } from '../../../shared/quote.service';

@Component({
  selector: 'app-quote-search',
  templateUrl: './quote-search.component.html',
  styleUrls: ['./quote-search.component.css']
})
export class QuoteSearchComponent implements OnInit {
  quoteSearchResults: QuoteSummary[];
  constructor(private quoteService: QuoteService ) { }

  ngOnInit() {
    this.quoteService.getQuoteById("123456").subscribe(
      quoteSearchResults => {
        this.quoteSearchResults = [];
        this.quoteSearchResults.push(quoteSearchResults);
    });
  }
}
