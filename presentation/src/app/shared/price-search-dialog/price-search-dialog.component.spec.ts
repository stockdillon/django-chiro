import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSearchDialogComponent } from './price-search-dialog.component';

describe('PriceSearchDialogComponent', () => {
  let component: PriceSearchDialogComponent;
  let fixture: ComponentFixture<PriceSearchDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceSearchDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSearchDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
