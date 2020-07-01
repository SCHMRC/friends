import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FriendsSignupComponent } from './friends-signup/friends-signup.component';
import { FriendsLoginComponent } from './friends-login/friends-login.component';



const routes: Routes = [
  {path: 'app-friends-signup', component: FriendsSignupComponent},
  { path: 'app-friends-login', component: FriendsLoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

export const COMPONENTS = [
  FriendsSignupComponent,
  FriendsLoginComponent
];
