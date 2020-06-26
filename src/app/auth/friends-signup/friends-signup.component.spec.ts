import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsSignupComponent } from './friends-signup.component';

describe('FriendsSignupComponent', () => {
  let component: FriendsSignupComponent;
  let fixture: ComponentFixture<FriendsSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
