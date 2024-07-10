import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesCommdCompSupplComponent } from './pages-commd-comp-suppl.component';

describe('PagesCommdCompSupplComponent', () => {
  let component: PagesCommdCompSupplComponent;
  let fixture: ComponentFixture<PagesCommdCompSupplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesCommdCompSupplComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesCommdCompSupplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
