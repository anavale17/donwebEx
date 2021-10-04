// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// This Module's Components
import { SharedModule } from '../../shared.module';
import { SplashComponent } from './splash.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes = [
  {
    path: 'splash',
    component: SplashComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatProgressSpinnerModule,
  ],
  declarations: [SplashComponent],
  exports: [SplashComponent],
})
export class SplashModule {}
