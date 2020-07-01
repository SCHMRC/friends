import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/services/user';
    // tslint:disable

@Component({
  selector: 'app-friends-signup',
  templateUrl: './friends-signup.component.html',
  styleUrls: ['./friends-signup.component.scss']
})
export class FriendsSignupComponent implements OnInit {
  errormsg: any;
  showerror = false;
  modal: string;
  exampleModal: string;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
  }

  onSignup(form: object): void {

    this.authService.signup(form['email'], form['password'])
    .then(
      (userInfo) => {
        const user: User = new User(form['email'], form['nome'], form['tel'], userInfo.user.uid, 0);
        this.writeNewUser(user);
    })
    .catch(
      (error) => {
        this.showerror = true;
        this.errormsg = error.message;
      });

  }

  private writeNewUser(user: User) {
    this.userService.addUser(user);

  }

}
