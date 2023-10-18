import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVerticalsComponent } from './home-verticals.component';

describe('HomeVerticalsComponent', () => {
  let component: HomeVerticalsComponent;
  let fixture: ComponentFixture<HomeVerticalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeVerticalsComponent]
    });
    fixture = TestBed.createComponent(HomeVerticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
