import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGlobalComponent } from './home-global.component';

describe('HomeGlobalComponent', () => {
  let component: HomeGlobalComponent;
  let fixture: ComponentFixture<HomeGlobalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeGlobalComponent]
    });
    fixture = TestBed.createComponent(HomeGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
