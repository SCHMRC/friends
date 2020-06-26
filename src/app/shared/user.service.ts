import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from './user';
import { USERSCHILD } from './users-child';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireDb: AngularFireDatabase) { }

  addUser(user: User){
    this.fireDb.object(`${USERSCHILD}/${user.uid}`).set(user);
  }
}
