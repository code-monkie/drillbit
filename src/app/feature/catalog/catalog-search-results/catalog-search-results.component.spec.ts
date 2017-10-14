import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSearchResultsComponent } from './catalog-search-results.component';

describe('CatalogSearchResultsComponent', () => {
  let component: CatalogSearchResultsComponent;
  let fixture: ComponentFixture<CatalogSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
