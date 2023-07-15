import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EmailConfirmationComponent } from './pages/email-confirmation/email-confirmation.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ResetPasswordRequestComponent } from './pages/reset-password-request/reset-password-request.component';
import { HomeComponent } from './pages/home/home.component';
import { UserGuard } from './core/guards/user.guard';
import { AdminGuard } from './core/guards/admin.guard';
import { UserSessionComponent } from './pages/user/user-session/user-session.component';
import { UserFavoritesListComponent } from './pages/user/user-favorites-list/user-favorites-list.component';
import { UserInfoComponent } from './pages/user/user-info/user-info.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserSessionBaseComponent } from './pages/user/user-session-base/user-session-base.component';
import { FranckHeaderComponent } from './pages/franck-header/franck-header.component';
import { IfFavoriteListIsEmptyComponent } from './pages/user/if-favorite-list-is-empty/if-favorite-list-is-empty.component';

const routes: Routes = [
  {path : "header-franck", component : FranckHeaderComponent},

  {path : "home", component : HomeComponent },

  {path : "register", component : RegisterComponent},
  {path : "email-confirmation/:email", component : EmailConfirmationComponent},
  
  {path : "login", component : LoginComponent},
  {path : "reset-password", component : ResetPasswordRequestComponent},
  {path : "reset-password/:token", component : ResetPasswordComponent },
  
  {path : "user-session", component : UserSessionComponent },
  {path : "user-session-base", component : UserSessionBaseComponent},
  {path : "user-info", component : UserInfoComponent},
  {path : "if-favorite-list-is-empty", component : IfFavoriteListIsEmptyComponent},
  {path : "user-favorites-list", component : UserFavoritesListComponent},

  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
