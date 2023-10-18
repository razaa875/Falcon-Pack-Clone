import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLinkedinfeedComponent } from './home-linkedinfeed.component';

describe('HomeLinkedinfeedComponent', () => {
  let component: HomeLinkedinfeedComponent;
  let fixture: ComponentFixture<HomeLinkedinfeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeLinkedinfeedComponent]
    });
    fixture = TestBed.createComponent(HomeLinkedinfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
