import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserGuard } from './core/guards/user.guard';
import { AdminGuard } from './core/guards/admin.guard';

import { FranckHeaderComponent } from './pages/franck-header/franck-header.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';

// REGISTER & AUTHENTICATION
import { RegisterComponent } from './pages/register/register.component';
import { EmailConfirmationComponent } from './pages/email-confirmation/email-confirmation.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ResetPasswordRequestComponent } from './pages/reset-password-request/reset-password-request.component';

// USER
import { UserSessionComponent } from './pages/user/user-session/user-session.component';
import { UserSessionBaseComponent } from './pages/user/user-session-base/user-session-base.component';
import { UserFavoritesListComponent } from './pages/user/user-favorites-list/user-favorites-list.component';
import { UserInfoComponent } from './pages/user/user-info/user-info.component';
import { IfFavoriteListIsEmptyComponent } from './pages/user/if-favorite-list-is-empty/if-favorite-list-is-empty.component';

// ADMIN 
import { AdminSessionComponent } from './pages/admin/admin-session/admin-session.component';

// GESTION USERS
import { AdminGestionUsersComponent } from './pages/admin/admin-gestion-users/admin-gestion-users.component';
import { AdminGestionUsersTableUserComponent } from './pages/admin/admin-gestion-users-table-user/admin-gestion-users-table-user.component';

// GESTION ROLES
import { AdminGestionRolesComponent } from './pages/admin/admin-gestion-roles/admin-gestion-roles.component';
import { AdminGestionRolesTableRoleComponent } from './pages/admin/admin-gestion-roles-table-role/admin-gestion-roles-table-role.component';

// GESTION VIDEOS
import { AdminGestionVideosComponent } from './pages/admin/admin-gestion-videos/admin-gestion-videos.component';
import { AdminGestionVideosTableVideoComponent } from './pages/admin/admin-gestion-videos-table-video/admin-gestion-videos-table-video.component';

// GESTION CATEGORIES
import { AdminGestionCategoriesComponent } from './pages/admin/admin-gestion-categories/admin-gestion-categories.component';
import { AdminGestionCategoriesTableCategoryComponent } from './pages/admin/admin-gestion-categories-table-category/admin-gestion-categories-table-category.component';

// GESTION SECTIONS
import { AdminGestionSectionsComponent } from './pages/admin/admin-gestion-sections/admin-gestion-sections.component';
import { AdminGestionSectionsTableSectionComponent } from './pages/admin/admin-gestion-sections-table-section/admin-gestion-sections-table-section.component';


const routes: Routes = [
  {path : "header-franck", component : FranckHeaderComponent},

  {path : "home", component : HomeComponent },

  // CREATE USER
  {path : "register", component : RegisterComponent},
  {path : "email-confirmation/:email", component : EmailConfirmationComponent},
  
  // AUTHENTICATION
  {path : "login", component : LoginComponent},
  {path : "reset-password", component : ResetPasswordRequestComponent},
  {path : "reset-password/:token", component : ResetPasswordComponent },
  
  // USER
  {path : "user-session", component : UserSessionComponent, children: [
    {path : "user-session-base", component : UserSessionBaseComponent},
    {path : "user-info", component : UserInfoComponent},
    {path : "user-favorites-list", component : UserFavoritesListComponent},
    {path : "if-favorite-list-is-empty", component : IfFavoriteListIsEmptyComponent},
  ]
  },

  // ADMIN
  {path : "admin-session", component : AdminSessionComponent, children: [  
    {path : "admin-session-base", component : UserSessionBaseComponent},
    {path : "admin-info", component : UserInfoComponent},
    {path : "admin-favorites-list", component : UserFavoritesListComponent},
    {path : "admin-gestion-users", component : AdminGestionUsersComponent},
    {path : "admin-gestion-users-table-user", component : AdminGestionUsersTableUserComponent},
    {path : "admin-gestion-roles", component : AdminGestionRolesComponent},
    {path : "admin-gestion-roles-table-role", component : AdminGestionRolesTableRoleComponent},
    {path : "admin-gestion-videos", component : AdminGestionVideosComponent},
    {path : "admin-gestion-videos-table-video", component : AdminGestionVideosTableVideoComponent},
    {path : "admin-gestion-sections", component : AdminGestionSectionsComponent},
    {path : "admin-gestion-sections-table-section", component : AdminGestionSectionsTableSectionComponent},
    {path : "admin-gestion-categories", component : AdminGestionCategoriesComponent},
    {path : "admin-gestion-categories-table-category", component : AdminGestionCategoriesTableCategoryComponent},
  ]
},

  {path: "**", component: PageNotFoundComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
