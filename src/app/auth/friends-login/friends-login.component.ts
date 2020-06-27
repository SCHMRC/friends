import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/auth.service';

@Component({
  selector: 'app-friends-login',
  templateUrl: './friends-login.component.html',
  styleUrls: ['./friends-login.component.scss']
})
export class FriendsLoginComponent implements OnInit {
  showError = true;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(form: object){
    this.authService.signin(form['email'], form['password'])
    .then((res) => {console.log(res)})
    .catch((err) => {console.log(err)})

  }

  onReset(form: object) {
    this.authService.reset(form['email'])
    .then((res) => {console.log(res); })
    .catch((res) => {console.log(res); });

  }


}
