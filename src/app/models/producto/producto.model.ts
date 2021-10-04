import { Brand } from '../brands/brand.model';
import { Base } from '../base.model';


export class Producto extends Base {
  id:string;
  id_producto:string;
  nombre: string;
  plan: string;
  valor: number;
  periodo: number;
  
  constructor() {
    super();
    this.nombre = '';
    this.plan = "";
    this.valor=0;
    this.periodo=0;
  }
}
