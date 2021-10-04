import { Brand } from './../brands/brand.model';
import { Base } from './../base.model';

export class Supplier extends Base {
  name: string;
  logo: string;
  url: string;
  offersUrl: string;
  brands: Brand[];
  constructor() {
    super();
    this.name = '';
    this.logo = '';
    this.url = '';
    this.offersUrl = '';
    this.brands = [];
  }
}
