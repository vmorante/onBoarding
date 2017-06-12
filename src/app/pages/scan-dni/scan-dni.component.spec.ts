import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScanDNIComponent } from './scan-dni.component';

describe('ScanDNIComponent', () => {
  let component: ScanDNIComponent;
  let fixture: ComponentFixture<ScanDNIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScanDNIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScanDNIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
