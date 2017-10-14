import { Component, OnInit, Input } from '@angular/core';
import { CatalogItemSummary } from "../../../shared/catalog-item-summary";

@Component({
  selector: 'app-catalog-search-results',
  templateUrl: './catalog-search-results.component.html',
  styleUrls: ['./catalog-search-results.component.css']
})
export class CatalogSearchResultsComponent implements OnInit {
  @Input() catalogItemSummaries: CatalogItemSummary[];
  constructor() { }

  ngOnInit() {
  }

}
