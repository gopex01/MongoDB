import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Store, StoreModule} from '@ngrx/store'
import { loginReducer } from './reducers/login.reducer';
import { ProfilComponent } from './profil/profil.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SettingsComponent } from './settings/settings.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationSuccessDialogComponent } from './registration-success-dialog/registration-success-dialog.component';
import { HomePageComponent } from './home-page/home-page.component';
import { borderCrossReducer } from './reducers/border.cross.reducer';
import { ListBorderCrossComponent } from './list-border-cross/list-border-cross.component';
import { BorderCrossComponent } from './border-cross/border-cross.component';
import { CreateTerminComponent } from './create-termin/create-termin.component';
import { setSecondPart } from './actions/create-term.action';
import { reducerFinal } from './reducers/create-term.reducer';
import { CreateTermPart2Component } from './create-term-part2/create-term-part2.component';
import { CreateTermPart3Component } from './create-term-part3/create-term-part3.component';
import { CreateTermPart4Component } from './create-term-part4/create-term-part4.component';
import { BorderCrossInfoComponent } from './border-cross-info/border-cross-info.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CreateTermPart5Component } from './create-term-part5/create-term-part5.component';
import { BorderCrossEffects } from './effects/border-cross.effect';
import { EffectsModule } from '@ngrx/effects';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BCProfileComponent } from './bcprofile/bcprofile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { UserProfileEffects } from './effects/user-profile.effects';
import { userProfileReducer } from './reducers/user-profile.reducer';
import { CommonModule } from '@angular/common';
import { BCUserProfileEffects } from './effects/bc-user-profile.effects';
import { userBCProfileReducer } from './reducers/bc-profile.reducer';
import { TermComponent } from './term/term.component';
import { ListTermComponent } from './list-term/list-term.component';
import { TermEffects } from './effects/term.effects';
import { termReducer } from './reducers/term.reducer';
import { AdminEffects } from './effects/admin.effect';
import { adminReducer } from './reducers/admin.reducer';
import { ListBorderCrossAdminComponent } from './list-border-cross-admin/list-border-cross-admin.component';
import { CreateBcComponent } from './create-bc/create-bc.component';
import { ListPersonalTermComponent } from './list-personal-term/list-personal-term.component';
import { PersonalTermComponent } from './personal-term/personal-term.component';
import { PersonalTermEffects } from './effects/personal-term.effect';
import { NotificationComponent } from './notification/notification.component';
import { ListNotificationComponent } from './list-notification/list-notification.component';
import { NotificationEffects } from './effects/notification.effect';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { notificationReducer } from './entities/notification.reducer';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogSuccessTermComponent } from './dialog-success-term/dialog-success-term.component';
import { DialogSuccessBcComponent } from './dialog-success-bc/dialog-success-bc.component';
import { DialogSuccessCrossedBcComponent } from './dialog-success-crossed-bc/dialog-success-crossed-bc.component';
import { DialogSuccessRegistrationComponent } from './dialog-success-registration/dialog-success-registration.component';
import { DialogErrorLoginComponent } from './dialog-error-login/dialog-error-login.component';
import { DialogErrorAllComponent } from './dialog-error-all/dialog-error-all.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ListUserCardComponent } from './list-user-card/list-user-card.component';
import { ArrUserReducer } from './reducers/user.reducer';
import { UserEffects } from './effects/user.effect';
import { DialogSuccessDeletedBcComponent } from './dialog-success-deleted-bc/dialog-success-deleted-bc.component';
import { DialogSuccessDeletedAccountComponent } from './dialog-success-deleted-account/dialog-success-deleted-account.component';
import { DialogSuccessAcceptedTermComponent } from './dialog-success-accepted-term/dialog-success-accepted-term.component';
import { DialogDeclineTermComponent } from './dialog-decline-term/dialog-decline-term.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfilComponent,
    SettingsComponent,
    RegistrationSuccessDialogComponent,
    HomePageComponent,
    ListBorderCrossComponent,
    BorderCrossComponent,
    CreateTerminComponent,
    CreateTermPart2Component,
    CreateTermPart3Component,
    CreateTermPart4Component,
    BorderCrossInfoComponent,
    CreateTermPart5Component,
    BCProfileComponent,
    AdminProfileComponent,
    TermComponent,
    ListTermComponent,
    ListBorderCrossAdminComponent,
    CreateBcComponent,
    ListPersonalTermComponent,
    PersonalTermComponent,
    NotificationComponent,
    ListNotificationComponent,
    DialogSuccessTermComponent,
    DialogSuccessBcComponent,
    DialogSuccessCrossedBcComponent,
    DialogSuccessRegistrationComponent,
    DialogErrorLoginComponent,
    DialogErrorAllComponent,
    UserCardComponent,
    ListUserCardComponent,
    DialogSuccessDeletedBcComponent,
    DialogSuccessDeletedAccountComponent,
    DialogSuccessAcceptedTermComponent,
    DialogDeclineTermComponent,
  ],
  imports: [
    SlickCarouselModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    StoreModule.forRoot({
    'auth': loginReducer,
    'bc': borderCrossReducer,
    'term': reducerFinal,
    'user': userProfileReducer,
    'bcuser': userBCProfileReducer,
    'termS': termReducer,
    'admin': adminReducer,
    'notification': notificationReducer,
    'userArr':ArrUserReducer
    }),
    EffectsModule.forRoot(UserProfileEffects,BCUserProfileEffects,TermEffects,AdminEffects,BorderCrossEffects,PersonalTermEffects,
      NotificationEffects,UserEffects
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectOutsideZone: true // If set to true, the connection is established outside the Angular zone for better performance
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
