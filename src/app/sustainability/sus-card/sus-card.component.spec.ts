import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusCardComponent } from './sus-card.component';

describe('SusCardComponent', () => {
  let component: SusCardComponent;
  let fixture: ComponentFixture<SusCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SusCardComponent]
    });
    fixture = TestBed.createComponent(SusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
