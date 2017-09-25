import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginCmpComponent } from './login/login-cmp/login-cmp.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginCmpComponent }
];


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
