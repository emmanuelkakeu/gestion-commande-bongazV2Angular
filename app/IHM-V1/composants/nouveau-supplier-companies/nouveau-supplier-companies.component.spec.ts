import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauSupplierCompaniesComponent } from './nouveau-supplier-companies.component';

describe('NouveauSupplierCompaniesComponent', () => {
  let component: NouveauSupplierCompaniesComponent;
  let fixture: ComponentFixture<NouveauSupplierCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NouveauSupplierCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NouveauSupplierCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
