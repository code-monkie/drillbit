import { Injectable } from '@angular/core';

import { ConstantsService } from './constants.service';
import { ResourceService } from './resource.service';
import { CatalogItem } from './catalog-item';

@Injectable()
export class CatalogService {

  constructor(private resourceService: ResourceService, private constantsService: ConstantsService) { }

  getCatalogItems() {
    return this.resourceService.get(this.constantsService.getCatalogItemsUrl());
  }

  getCatalogItemSummaryById(itemId: string) {
    return this.resourceService.get(this.constantsService.getCatalogItemByIdUrl(itemId));
  }

  getCatalogItemDetailById (itemId: string) {
    return this.resourceService.get(this.constantsService.getCatalogItemByIdUrl(itemId) + "/details");
  }

  getImageUrl(item: CatalogItem) {
    if (item && item.imageUrl){
      return this.constantsService.getCatalogItemsUrl() + "/" + item.imageUrl;
    } else {
      return null;
    }
  }
}
