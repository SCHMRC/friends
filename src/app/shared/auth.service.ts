import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  signup(email: string, password: string){
    this.angularFireAuth.createUserWithEmailAndPassword(email, password);
  }
}
