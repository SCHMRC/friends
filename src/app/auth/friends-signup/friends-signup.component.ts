import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';
import { UserService } from './../../shared/user.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-friends-signup',
  templateUrl: './friends-signup.component.html',
  styleUrls: ['./friends-signup.component.scss']
})
export class FriendsSignupComponent implements OnInit {

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSignup(form: object): void {
    this.authService.signup(form['email'], form['password']).then(
      (userInfo) => {
        const user: User = new User(form['email'], form['nome'], form['tel'], userInfo.user.uid, 0);
        this.writeNewUser(user);
    });

  }

  private writeNewUser(user: User) {
    this.userService.addUser(user);

  }

}
