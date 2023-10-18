import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePackagingComponent } from './home-packaging.component';

describe('HomePackagingComponent', () => {
  let component: HomePackagingComponent;
  let fixture: ComponentFixture<HomePackagingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePackagingComponent]
    });
    fixture = TestBed.createComponent(HomePackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
