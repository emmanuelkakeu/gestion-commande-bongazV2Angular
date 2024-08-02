import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IhmV1Component } from './ihm-v1.component';

describe('IhmV1Component', () => {
  let component: IhmV1Component;
  let fixture: ComponentFixture<IhmV1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IhmV1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IhmV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
