import { Brand } from '../brands/brand.model';
import { Base } from '../base.model';

export class Periodo extends Base {
  periodo: number;
  valor:number;
  // url: string;
  // offersUrl: string;
  // brands: Brand[];
  constructor() {
    super();
    this.periodo = 0;
    this.valor = 0;
    // this.url = '';
    // this.offersUrl = '';
    // this.brands = [];
  }
}
