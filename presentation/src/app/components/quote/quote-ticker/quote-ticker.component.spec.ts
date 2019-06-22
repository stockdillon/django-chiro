import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteTickerComponent } from './quote-ticker.component';

describe('QuoteTickerComponent', () => {
  let component: QuoteTickerComponent;
  let fixture: ComponentFixture<QuoteTickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteTickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
