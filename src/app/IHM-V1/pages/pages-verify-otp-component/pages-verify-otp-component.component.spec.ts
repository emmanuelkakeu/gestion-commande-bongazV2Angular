import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesVerifyOtpComponentComponent } from './pages-verify-otp-component.component';

describe('PagesVerifyOtpComponentComponent', () => {
  let component: PagesVerifyOtpComponentComponent;
  let fixture: ComponentFixture<PagesVerifyOtpComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesVerifyOtpComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesVerifyOtpComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
