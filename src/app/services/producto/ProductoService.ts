
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { planes } from "../../models/planes/planes.model";
import { Periodo } from "../../models/periodo/periodo.model";
import { environment } from "../../../environments/environment";
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from "rxjs";
@Injectable({
    providedIn: 'root',
  })
//Servicio de usuario
export class ProductoService { 
    private movementBehaviorSubject: BehaviorSubject<planes>;
    public movementObservable: Observable<planes>;

    constructor(private http: HttpClient) {
      this.movementBehaviorSubject = new BehaviorSubject<planes>(null);
      this.movementObservable = this.movementBehaviorSubject.asObservable();
   
    }
    
  //Servicio listado de planes
    public listProd(){
      return this.http
          .get(environment.api.auth+'/getListado.php')
          .pipe(
            map((response) => {
              return response;
            })
          );
    }

    //Servicio listado carrito
    public listcarrito(){
      console.log("url Listacarrito",environment.api.auth+'/getListadoCarrito.php');
      
      return this.http
          .get(environment.api.auth+'/getListadoCarrito.php')
          .pipe(
            map((response) => {
              return response;
            })
          );
    }

    //Add Carrito
    public Add(plan: string,periodo:number){
      return this.http
          .get<string>(environment.api.auth+`/agregarItem.php/${periodo}/${plan}` )
          .pipe(
            map((response) => {
              console.log("respuesta en servicio",response);
              return response;
            })
          );
    }

    //Delete Carrito
    delete(id: string):any {
      const params = new HttpParams()
        .set('id_producto', id);
        console.log("url delete",environment.api+`/removerItem.php?id_producto=`, { params: params })
      return this.http.delete(environment.api+`/removerItem.php?id_producto=`, { params: params })
      .pipe(
        map((response)=> {
          console.log("rspuestaDelete",response);
          return response
        }
        
        )
      );
    }
  
    
    public deleteItem(idProd:string):any{
      console.log("url deleteItem",environment.api.auth+`/removerItem.php?id_producto=${idProd}`)
      return this.http.delete
      (environment.api.auth+`/removerItem.php?id_producto=${idProd}`)
      .pipe(
        map((response) => {
          console.log("response Servicio Delete",response);
          
          return response;
        })
      );
    }

    // //Cambiar de estado el movimiento 
    // public UpDate2(movimiento:Movements):any{
    //   return this.http.put
    //   (environment.apiUrl+'/Movements/update2',movimiento)
    //   .pipe(
    //     map((response) => {
    //       return response;
    //     })
    //   );
    // }
    
    // public get movement(): Movements{
    //   return this.movementBehaviorSubject.value;
    // }

    // public setMovement(collapse: Movements): void {
    //     this.movementBehaviorSubject.next(collapse);
    // }  
  }

function $branchOfficeId(arg0: string, $branchOfficeId: any) {
  throw new Error("Function not implemented.");
}

