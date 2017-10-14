import { Component, OnInit, Input } from '@angular/core';
import { QuoteSummary } from '../../../shared/quote-summary';

@Component({
  selector: 'app-quote-search-results',
  templateUrl: './quote-search-results.component.html',
  styleUrls: ['./quote-search-results.component.css']
})
export class QuoteSearchResultsComponent implements OnInit {
  @Input() quoteSummaries: QuoteSummary[];
  constructor() { }

  ngOnInit() {
  }

}
