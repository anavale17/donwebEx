// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SaleItemComponent } from "./saleItem/saleItem.component";
// This Module's Components
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SupplierService } from './../../services/suppliers/supplier.service';
import { AnulateComponent } from "./anulate/anulate.component";
import { ShoppingCart } from "./shoppingCart/shoppingCart.component";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

const routes = [
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [NgxPermissionsGuard],
    // data: {
    //     permissions: {
    //         only: 'PAGES_HOME',
    //         redirectTo: '/pages/errors/error-403'
    //     }
    // }
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    NgxDatatableModule
  ],
  declarations: [HomeComponent,SaleItemComponent,AnulateComponent,ShoppingCart],
  exports: [HomeComponent,ShoppingCart],
  providers: [SupplierService],
})
export class HomeModule {}
