import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSupplierComponent } from './pages-supplier.component';

describe('PagesSupplierComponent', () => {
  let component: PagesSupplierComponent;
  let fixture: ComponentFixture<PagesSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesSupplierComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
