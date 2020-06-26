import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
