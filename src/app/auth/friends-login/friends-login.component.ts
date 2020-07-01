import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
    // tslint:disable
@Component({
  selector: 'app-friends-login',
  templateUrl: './friends-login.component.html',
  styleUrls: ['./friends-login.component.scss']
})
export class FriendsLoginComponent implements OnInit {
  showError = false;
  msgerror: any;
  user: any;

  constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: object){
    this.authService.signin(form['email'], form['password'])
    .then((res) => {
      this.userService.getUser(res.user.uid).subscribe(
        (data) => {this.user = data; }
      ); })
    .catch((err) => {
      this.showError=true;
      this.msgerror = err.message;

    });

  }

  onReset(form: object) {
    this.authService.reset(form['email'])
    .then(() => {alert('Istruzioni per il reset inviati via mail') })
    .catch((res) => {console.log(res); });

  }


}
