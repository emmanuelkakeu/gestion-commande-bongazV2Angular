import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGasRetailerComponent } from './list-gas-retailer.component';

describe('ListGasRetailerComponent', () => {
  let component: ListGasRetailerComponent;
  let fixture: ComponentFixture<ListGasRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListGasRetailerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListGasRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
