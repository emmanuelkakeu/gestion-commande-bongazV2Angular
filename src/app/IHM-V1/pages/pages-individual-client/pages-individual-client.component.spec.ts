import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesIndividualClientComponent } from './pages-individual-client.component';

describe('PagesIndividualClientComponent', () => {
  let component: PagesIndividualClientComponent;
  let fixture: ComponentFixture<PagesIndividualClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesIndividualClientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagesIndividualClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
