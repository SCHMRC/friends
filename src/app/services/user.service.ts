import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { User } from './user';
import { USERS_CHILD } from './database-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireDb: AngularFireDatabase) { }

  addUser(user: User){
    this.fireDb.object(`${USERS_CHILD}/${user.uid}`).set(user);
  }
  getUser(uid: any): Observable<any> {
    return this.fireDb.object<any>(`${USERS_CHILD}/${uid}`).valueChanges();
  }
}
