import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusDescComponent } from './sus-desc.component';

describe('SusDescComponent', () => {
  let component: SusDescComponent;
  let fixture: ComponentFixture<SusDescComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SusDescComponent]
    });
    fixture = TestBed.createComponent(SusDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
