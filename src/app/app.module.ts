import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared.module';
import { UiModule } from './ui/ui.module';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatDialogModule } from '@angular/material/dialog';
import { SplashModule } from './ui/splash/splash.module';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { UserService } from './services/users/user.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


const routes: Routes = [
  {
    path: 'ui',
    loadChildren: () => UiModule,
  },
  {
    path: '**',
    redirectTo: 'ui/home',
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      relativeLinkResolution: 'legacy',
    }),
    SharedModule,
    AngularFireModule.initializeApp(environment.google.firebase),
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    AngularFirestoreModule, // firestore
    MatDialogModule,
    SplashModule,
    NgxDatatableModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
