import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSusComponent } from './home-sus.component';

describe('HomeSusComponent', () => {
  let component: HomeSusComponent;
  let fixture: ComponentFixture<HomeSusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSusComponent]
    });
    fixture = TestBed.createComponent(HomeSusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
