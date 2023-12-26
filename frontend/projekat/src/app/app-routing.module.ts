import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfilComponent } from './profil/profil.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListBorderCrossComponent } from './list-border-cross/list-border-cross.component';
import { CreateTerminComponent } from './create-termin/create-termin.component';
import { CreateTermPart2Component } from './create-term-part2/create-term-part2.component';
import { CreateTermPart3Component } from './create-term-part3/create-term-part3.component';
import { CreateTermPart4Component } from './create-term-part4/create-term-part4.component';
import { BorderCrossInfoComponent } from './border-cross-info/border-cross-info.component';
import { CreateTermPart5Component } from './create-term-part5/create-term-part5.component';
import { BCProfileComponent } from './bcprofile/bcprofile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ListTermComponent } from './list-term/list-term.component';
import { ListBorderCrossAdminComponent } from './list-border-cross-admin/list-border-cross-admin.component';
import { CreateBcComponent } from './create-bc/create-bc.component';
import { ListPersonalTermComponent } from './list-personal-term/list-personal-term.component';
import { ListNotificationComponent } from './list-notification/list-notification.component';
import { ListUserCardComponent } from './list-user-card/list-user-card.component';
const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'Profile',component:ProfilComponent},
  {path:'Login',component:LoginComponent},
  {path:'ListBC',component:ListBorderCrossComponent},
  {path:'CreateTerm',component:CreateTerminComponent},
  {path:'CreateTerm2',component:CreateTermPart2Component},
  {path:'CreateTerm3',component:CreateTermPart3Component},
  {path:'CreateTerm4',component:CreateTermPart4Component},
  {path:'BCInfo',component:BorderCrossInfoComponent},
  {path:'CreateTerm5',component:CreateTermPart5Component},
  {path:'BCProfile',component:BCProfileComponent},
  {path:'AdminProfile',component:AdminProfileComponent},
  {path:'ProfileSettings',component:SettingsComponent},
  {path:'AllTerms',component:ListTermComponent},
  {path:'ListBCAdmin',component:ListBorderCrossAdminComponent},
  {path:'CreateBC',component:CreateBcComponent},
  {path:'PersonalTerms',component:ListPersonalTermComponent},
  {path:'Notifications',component:ListNotificationComponent},
  {path:'AllUsers',component:ListUserCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
