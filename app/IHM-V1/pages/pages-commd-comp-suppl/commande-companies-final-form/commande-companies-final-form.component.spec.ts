import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeCompaniesFinalFormComponent } from './commande-companies-final-form.component';

describe('CommandeCompaniesFinalFormComponent', () => {
  let component: CommandeCompaniesFinalFormComponent;
  let fixture: ComponentFixture<CommandeCompaniesFinalFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandeCompaniesFinalFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommandeCompaniesFinalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
