import {Component, Inject, OnChanges, SimpleChanges} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Producto } from 'src/app/models/producto/producto.model';
import { ProductoService } from "../../../services/producto/ProductoService";


export interface DialogData{
  lista:Producto[]
}
@Component({
  selector: 'shoppingCart',
  templateUrl: 'shoppingCart.component.html',
  styleUrls: ['shoppingCart.component.scss'],
})
export class ShoppingCart implements OnChanges{
  eliminado:boolean=false;
  data2:Producto[];
  constructor(
    private _productoService:ProductoService,
     private _dialogRef: MatDialogRef<ShoppingCart>,
    @Inject(MAT_DIALOG_DATA) private _data: DialogData) {
      this.data2= _data.lista;
    }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("lista en modal", this.data2);
    
  }

  onClick(event) {
    // I need to get row data here 
    }
    onActivate(event) {
      if(event.type == 'click') {
          console.log(event.row);
          this._productoService.delete(event.row.id_producto).subscribe(
              (result:any) => {
              
               
                console.log("result en componente" ,result);
              }
               )     
      }
  }
  
  deleteProducto(){
    // this._productoService.deleteItem(id).subscribe(
    //   (result:any) => {
    //     var aux =  result;
       
    //     console.log("lista de planessdds" ,result);
    //   }
    //    )     
     
  }
   
  }
