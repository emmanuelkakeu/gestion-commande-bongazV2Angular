import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterEntreClientComponent } from './inter-entre-client.component';

describe('InterEntreClientComponent', () => {
  let component: InterEntreClientComponent;
  let fixture: ComponentFixture<InterEntreClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterEntreClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterEntreClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
