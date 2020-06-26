import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends-login',
  templateUrl: './friends-login.component.html',
  styleUrls: ['./friends-login.component.scss']
})
export class FriendsLoginComponent implements OnInit {
  showError = true;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(form){
    console.log(form.value)

  }

  onReset(form) {

  }


}
