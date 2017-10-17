import { Component, OnInit } from '@angular/core';
import { CatalogItemSummary } from "../../../shared/catalog-item-summary";
import { CatalogService } from "../../../shared/catalog.service";
@Component({
  selector: 'app-catalog-search',
  templateUrl: './catalog-search.component.html',
  styleUrls: ['./catalog-search.component.css']
})
export class CatalogSearchComponent implements OnInit {
  private catalogSearchResults: CatalogItemSummary[];
  constructor(private catalogService: CatalogService) { }

  ngOnInit() {
  
  }

  onSubmit () {
      this.catalogService.getCatalogItems().subscribe(
      catalogSearchResults => {
        this.catalogSearchResults = catalogSearchResults;
    });
  }
}
