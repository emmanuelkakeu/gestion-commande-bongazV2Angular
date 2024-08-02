import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesLoginComponentComponent } from './pages-login-component.component';

describe('PagesLoginComponentComponent', () => {
  let component: PagesLoginComponentComponent;
  let fixture: ComponentFixture<PagesLoginComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesLoginComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesLoginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
