import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ResetPasswordRequestComponent } from './pages/reset-password-request/reset-password-request.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { EmailConfirmationComponent } from './pages/email-confirmation/email-confirmation.component';
import { JwtInterceptorInterceptor } from './core/interceptors/jwt-interceptor.interceptor';
import { UserSessionComponent } from './pages/user/user-session/user-session.component';
import { UserInfoComponent } from './pages/user/user-info/user-info.component';
import { UserFavoritesListComponent } from './pages/user/user-favorites-list/user-favorites-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserSessionBaseComponent } from './pages/user/user-session-base/user-session-base.component';
import { FranckHeaderComponent } from './pages/franck-header/franck-header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ResetPasswordRequestComponent,
    ResetPasswordComponent,
    EmailConfirmationComponent,
    UserSessionComponent,
    UserInfoComponent,
    UserFavoritesListComponent,
    PageNotFoundComponent,
    UserSessionBaseComponent,
    FranckHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
