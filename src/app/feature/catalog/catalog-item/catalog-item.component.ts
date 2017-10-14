import { Component, OnInit, Input } from '@angular/core';
import { CatalogItem } from "../../../shared/catalog-item";

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {
  @Input() catalogItem: CatalogItem;

  constructor() { }

  ngOnInit() {
  }

}
