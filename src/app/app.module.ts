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
import { UserSessionComponent } from './pages/user/user-session/user-session.component';
import { UserInfoComponent } from './pages/user/user-info/user-info.component';
import { UserFavoritesListComponent } from './pages/user/user-favorites-list/user-favorites-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserSessionBaseComponent } from './pages/user/user-session-base/user-session-base.component';
import { FranckHeaderComponent } from './pages/franck-header/franck-header.component';
import { IfFavoriteListIsEmptyComponent } from './pages/user/if-favorite-list-is-empty/if-favorite-list-is-empty.component';
import { AdminSessionComponent } from './pages/admin/admin-session/admin-session.component';
import { AdminGestionUsersComponent } from './pages/admin/admin-gestion-users/admin-gestion-users.component';
import { AdminGestionVideosComponent } from './pages/admin/admin-gestion-videos/admin-gestion-videos.component';
import { AdminGestionSectionsComponent } from './pages/admin/admin-gestion-sections/admin-gestion-sections.component';
import { AdminGestionUsersTableUserComponent } from './pages/admin/admin-gestion-users-table-user/admin-gestion-users-table-user.component';
import { AdminGestionSectionsTableSectionComponent } from './pages/admin/admin-gestion-sections-table-section/admin-gestion-sections-table-section.component';
import { AdminGestionVideosTableVideoComponent } from './pages/admin/admin-gestion-videos-table-video/admin-gestion-videos-table-video.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
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
    UserSessionComponent,
    UserInfoComponent,
    UserFavoritesListComponent,
    PageNotFoundComponent,
    UserSessionBaseComponent,
    FranckHeaderComponent,
    IfFavoriteListIsEmptyComponent,
    AdminSessionComponent,
    AdminGestionUsersComponent,
    AdminGestionVideosComponent,
    AdminGestionSectionsComponent,
    AdminGestionUsersTableUserComponent,
    AdminGestionSectionsTableSectionComponent,
    AdminGestionVideosTableVideoComponent,
    UploadVideoComponent,
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
