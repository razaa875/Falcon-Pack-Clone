import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServeComponent } from './home-serve.component';

describe('HomeServeComponent', () => {
  let component: HomeServeComponent;
  let fixture: ComponentFixture<HomeServeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeServeComponent]
    });
    fixture = TestBed.createComponent(HomeServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
