import { Brand } from '../brands/brand.model';
import { Base } from '../base.model';
import { Periodo } from "../periodo/periodo.model";

export class planes extends Base {
  nombre: string;
  periodos: Periodo[];
  // url: string;
  // offersUrl: string;
  // brands: Brand[];
  constructor() {
    super();
    this.nombre = '';
    this.periodos = [];
    // this.url = '';
    // this.offersUrl = '';
    // this.brands = [];
  }
}
