
import { Component, OnInit, OnDestroy, Input, OnChanges, SimpleChanges } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Periodo } from "../../../models/periodo/periodo.model";
import { planes } from 'src/app/models/planes/planes.model';
import { AnulateComponent } from "../anulate/anulate.component";
import { ProductoService } from "../../../services/producto/ProductoService";

@Component({
  selector: 'saleItem',
  templateUrl: 'saleItem.component.html',
  styleUrls: ['saleItem.component.scss'],
})
export class SaleItemComponent implements OnChanges {
  @Input() item:planes;
  periodos:Periodo[];
  per:Periodo;
  anulado:boolean;  
  amount='0';
  amountTotal='0';
  discountAmount='0';

  ngOnChanges(sc: SimpleChanges) {
    
    
    // changes.prop contains the old and the new value...
  }
  constructor(public dialog: MatDialog,public dialogExito: MatDialog,private _productoService:ProductoService,) {
   
  }

  openDialog(p:Periodo): void {
    var a:number=12;
    console.log("nombre",this.item.nombre);
  console.log("periodo", p.periodo);
      
    this._productoService.Add(this.item.nombre,p.periodo).subscribe(
      (response)=>console.log("add en saleItems",response)
      
    )
    const dialogRef = this.dialog.open(AnulateComponent, {
      panelClass: 'dialog',
      data:this.item
    });

   // dialogRef.afterClosed().subscribe((result:boolean) => {
     
  //    this.anulado=result;
  //    if (result) {
  //      const dialogExito= this.dialogExito.open(ExitoComponent,{
  //        panelClass: 'dialogExito'
  //      })
  //    }
  //   });
  }

  getValue(value: any): number {
    if (!value) {
      return 0;
    }
    if (typeof value === 'number') {
      return value;
    }
    if (!value.trim().length) {
      return 0;
    }
    try {
      let valueAux = value.replace(/[^0-9,]/g, '').replace('.','').replace(',', '.');
      return Number.parseFloat(valueAux);
    } catch (e) {
      return 0;
    }
  }
}


