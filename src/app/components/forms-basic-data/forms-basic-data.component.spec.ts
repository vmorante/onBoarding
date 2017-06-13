import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBasicDataComponent } from './forms-basic-data.component';

describe('FormsBasicDataComponent', () => {
  let component: FormsBasicDataComponent;
  let fixture: ComponentFixture<FormsBasicDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsBasicDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsBasicDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
