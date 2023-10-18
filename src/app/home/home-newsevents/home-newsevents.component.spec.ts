import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewseventsComponent } from './home-newsevents.component';

describe('HomeNewseventsComponent', () => {
  let component: HomeNewseventsComponent;
  let fixture: ComponentFixture<HomeNewseventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNewseventsComponent]
    });
    fixture = TestBed.createComponent(HomeNewseventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
