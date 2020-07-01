import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AuthRoutingModule, COMPONENTS } from './auth-routing.module';
import { ErrorComponent } from './../error/error.component';




@NgModule({
  declarations: [COMPONENTS, ErrorComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule
  ]
})
export class AuthModule { }
