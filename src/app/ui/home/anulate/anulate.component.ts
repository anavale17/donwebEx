import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Periodo } from '../../../models/periodo/periodo.model';
import { ProductoService } from '../../../services/producto/ProductoService';




@Component({
  selector: 'anulate',
  templateUrl: 'anulate.component.html',
  styleUrls: ['anulate.component.scss'],
})
export class AnulateComponent{
  eliminado:boolean=false;
  constructor(private _movementService: ProductoService,
     public dialogRef: MatDialogRef<AnulateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Periodo) {}

    confirmar(){
      // let mov:Periodo=this.data;
     
      
      // this._movementService.Add(mov.periodo,mov.valor).subscribe(result => {     
      
      // })
      // this.eliminado=true;
      // this.onNoClick(this.eliminado)
    }
    onNoClick(e:boolean): void {
      this.dialogRef.close(e);
    }

  }
