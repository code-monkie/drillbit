import { Component, OnInit, Input } from '@angular/core';
import { CatalogItem } from "../../../shared/catalog-item";
import { ActivatedRoute, Params } from "@angular/router";

import { CatalogService } from '../../../shared/catalog.service';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  @Input() catalogItem: CatalogItem;

  constructor(private catalogService: CatalogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.catalogService.getCatalogItemDetailById(params["catalogId"]).subscribe(
          catalogItem => {
            this.catalogItem = catalogItem;
          }
        )
      }
    );
  }

  getImageUrl() {
    return this.catalogService.getImageUrl(this.catalogItem);
  }
}
