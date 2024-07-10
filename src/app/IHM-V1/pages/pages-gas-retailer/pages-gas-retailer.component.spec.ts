import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesGasRetailerComponent } from './pages-gas-retailer.component';

describe('PagesGasRetailerComponent', () => {
  let component: PagesGasRetailerComponent;
  let fixture: ComponentFixture<PagesGasRetailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesGasRetailerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesGasRetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
