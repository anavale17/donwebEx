import { Supplier } from './../../models/suppliers/supplier.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SupplierService } from './../../services/suppliers/supplier.service';
import { Subject } from 'rxjs';
import { ProductoService } from "./../../services/producto/ProductoService";
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import * as _ from 'lodash';
import { planes } from 'src/app/models/planes/planes.model';
import { SaleItemComponent } from "./saleItem/saleItem.component";
import { Producto } from "../../models/producto/producto.model";
import { MatDialog } from '@angular/material/dialog';
import { ShoppingCart } from './shoppingCart/shoppingCart.component';
@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})
export class HomeComponent implements OnInit {
  TAG = 'HomeComponent';
  suppliers: Supplier[];
  listProd:planes[];
  listCarrito:Producto[];
  filteredSuppliers: Supplier[];
  searchSubject: Subject<string>;
  private unsubscribeAll: Subject<any>;

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _supplierService: SupplierService,
    private _productoService:ProductoService,
    public dialog: MatDialog
  ) {
   
  }

  ngOnInit(): void {
    this._productoService.listProd().subscribe(
      (result:any) => {
        var aux =  result;
        this.listProd=aux.response.planes;

        console.log("lista de planessdds" ,this.listProd);
      }
       )     
     
  }
  carrito(){
    this._productoService.listcarrito().subscribe(
      (result:any) => {
        var aux =  result;
        this.listCarrito=aux.response;
      
        console.log("lista", this.listCarrito);
      }
       ) 

        const dialogRef = this.dialog.open(ShoppingCart, {
        //  data:this.listCarrito
        width:"700px",
        height:"90%",
        data:{
          lista:this.listCarrito}
        });    
    
  }

  logout(): void {
    this._angularFireAuth.signOut();
  }
}
