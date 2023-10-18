import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCorporateComponent } from './home-corporate.component';

describe('HomeCorporateComponent', () => {
  let component: HomeCorporateComponent;
  let fixture: ComponentFixture<HomeCorporateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCorporateComponent]
    });
    fixture = TestBed.createComponent(HomeCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
