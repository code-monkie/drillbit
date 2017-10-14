import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSearchResultsComponent } from './quote-search-results.component';

describe('QuoteSearchResultsComponent', () => {
  let component: QuoteSearchResultsComponent;
  let fixture: ComponentFixture<QuoteSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
