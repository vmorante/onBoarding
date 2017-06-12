import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RECORDComponent } from './record.component';

describe('RECORDComponent', () => {
  let component: RECORDComponent;
  let fixture: ComponentFixture<RECORDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RECORDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RECORDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
