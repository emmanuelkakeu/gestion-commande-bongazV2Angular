import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCompaniesComponent } from './pages-companies.component';

describe('PagesCompaniesComponent', () => {
  let component: PagesCompaniesComponent;
  let fixture: ComponentFixture<PagesCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
