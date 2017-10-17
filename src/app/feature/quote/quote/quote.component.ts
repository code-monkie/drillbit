import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { QuoteService } from '../../../shared/quote.service';
import { QuoteSummary } from '../../../shared/quote-summary';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: QuoteSummary;
  constructor(private quoteService: QuoteService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.route.params.subscribe(
      (params: Params) => {
        this.quoteService.getQuoteById(params["quoteId"]).subscribe(
          quote => {
            this.quote = quote;
            console.log(this.quote);
          }
        )
      }
    );
  }
}
