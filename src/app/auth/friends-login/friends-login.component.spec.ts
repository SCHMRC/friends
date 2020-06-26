import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsLoginComponent } from './friends-login.component';

describe('FriendsLoginComponent', () => {
  let component: FriendsLoginComponent;
  let fixture: ComponentFixture<FriendsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
