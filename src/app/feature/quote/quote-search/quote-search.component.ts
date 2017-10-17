import { Component, OnInit } from '@angular/core';
import { QuoteSummary } from '../../../shared/quote-summary';
import { Contact  } from '../../../shared/contact';
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
  }

  onSubmit () {
    console.log("ngOnInit");
    this.quoteService.getQuotes().subscribe(
      quoteSearchResults => {
        this.quoteSearchResults = quoteSearchResults;
    });
  }
}
