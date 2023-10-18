import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SusMainComponent } from './sus-main.component';

describe('SusMainComponent', () => {
  let component: SusMainComponent;
  let fixture: ComponentFixture<SusMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SusMainComponent]
    });
    fixture = TestBed.createComponent(SusMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
