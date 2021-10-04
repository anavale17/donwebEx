import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SplashModule } from './splash/splash.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  imports: [
    // Home
    HomeModule,

    // Login
    LoginModule,

    // Splash
    SplashModule,

    //


  ],
})
export class UiModule {}
