import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClsFrsComponent } from './detail-cls-frs.component';

describe('DetailClsFrsComponent', () => {
  let component: DetailClsFrsComponent;
  let fixture: ComponentFixture<DetailClsFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailClsFrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailClsFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
