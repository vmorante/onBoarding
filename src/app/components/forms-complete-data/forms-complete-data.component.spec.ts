import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCompleteDataComponent } from './forms-complete-data.component';

describe('FormsCompleteDataComponent', () => {
  let component: FormsCompleteDataComponent;
  let fixture: ComponentFixture<FormsCompleteDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsCompleteDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCompleteDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
