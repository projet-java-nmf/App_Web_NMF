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
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideoComponent } from './video/video.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    ResetPasswordRequestComponent,
    ResetPasswordComponent,
    EmailConfirmationComponent,
    HeaderComponent,
    FooterComponent,
    VideoDetailsComponent,
    VideoComponent,
    SectionComponent
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
