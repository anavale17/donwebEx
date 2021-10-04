import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { Supplier } from '../../models/suppliers/supplier.model';

@Injectable()
export class SupplierService {
  public getAll(): Observable<Supplier[]> {
    const suppliers: Supplier[] = [
      {
        id: 'adidas',
        name: 'Adidas',
        logo:
          'https://www.adidas.com.ar/glass/react/4499a3b/assets/img/icon-adidas-logo.svg',
        url: 'https://www.adidas.com.ar',
        offersUrl: '',
        brands: [],
      },
      {
        id: 'topper',
        name: 'Topper',
        logo: 'TODO',
        url: 'https://www.topper.com.ar',
        offersUrl: '',
        brands: [],
      },
      {
        id: 'reebok',
        name: 'Reebok',
        logo:
          'https://www.reebok.com.ar/glass/react/4499a3b/assets/img/icon-reebok-logo-white.svg',
        url: 'https://www.reebok.com.ar',
        offersUrl: '',
        brands: [],
      },
      {
        id: 'new_balance',
        name: 'New Balance',
        logo:
          'https://www.newbalance.com.ar/skin/frontend/sns_sport/newbalance/images/newbalance.svg',
        url: 'https://www.newbalance.com.ar',
        offersUrl: '',
        brands: [],
      },
      {
        id: 'fila',
        name: 'Fila',
        logo: 'TODO',
        url: 'https://tienda.fila.com.ar',
        offersUrl: '',
        brands: [],
      },
      {
        id: 'umbro',
        name: 'Umbro',
        logo: 'TODO',
        url: 'https://tienda.umbro.com.ar',
        offersUrl: '',
        brands: [],
      },
      {
        id: 'penalty',
        name: 'Penalty',
        logo:
          'https://http2.mlstatic.com/storage/mshops-appearance-api/images/98/185436898/logo-2020041410312589500.png',
        url: 'https://www.penalty.com.ar',
        offersUrl: '',
        brands: [],
      },
      {
        id: 'lacoste',
        name: 'Lacoste',
        logo: 'TODO',
        url: 'https://www.lacoste.com/ar/',
        offersUrl: '',
        brands: [],
      },
      {
        id: 'converse',
        name: 'Converse',
        logo:
          'https://www.converse.com.ar/wp-content/themes/understrap-0.7/img/converse-strip.svg',
        url: 'https://www.converse.com.ar',
        offersUrl: '',
        brands: [],
      },
      {
        id: 'diadora',
        name: 'Diadora',
        logo: 'TODO',
        url: 'https://www.diadoraargentina.com',
        offersUrl: '',
        brands: [],
      },
      {
        id: 'kevingtone',
        name: 'Kevingtone',
        logo: 'TODO',
        url: 'https://www.kevingston.com',
        offersUrl: '',
        brands: [],
      },
      {
        id: 'netshoes',
        name: 'Netshoes',
        logo: 'TODO',
        url: 'https://www.netshoes.com.ar',
        offersUrl: '',
        brands: [
          {
            id: 'adidas',
            name: 'Adidas',
          },
          {
            id: 'converse',
            name: 'Converse',
          },
          {
            id: 'fila',
            name: 'Fila',
          },
          {
            id: 'lacoste',
            name: 'Lacoste',
          },
          {
            id: 'lotto',
            name: 'Lotto',
          },
          {
            id: 'new_balance',
            name: 'New Balance',
          },
          {
            id: 'nike',
            name: 'Nike',
          },
          {
            id: 'puma',
            name: 'Puma',
          },
          {
            id: 'reebok',
            name: 'Reebok',
          },
          {
            id: 'salomon',
            name: 'Salomon',
          },
          {
            id: 'topper',
            name: 'Topper',
          },
          {
            id: 'umbro',
            name: 'Umbro',
          },
        ],
      },
      {
        id: 'grid',
        name: 'Grid',
        logo: 'TODO',
        url: 'https://www.grid.com.ar',
        offersUrl:
          'https://www.grid.com.ar/153/180?PS=70&map=productClusterIds,productClusterIds&O=OrderByBestDiscountDESC',
        brands: [
          {
            id: 'adidas',
            name: 'Adidas',
          },
          {
            id: 'fila',
            name: 'Fila',
          },
          {
            id: 'new_balance',
            name: 'New Balance',
          },
          {
            id: 'nike',
            name: 'Nike',
          },
          {
            id: 'puma',
            name: 'Puma',
          },
          {
            id: 'reebok',
            name: 'Reebok',
          },
          {
            id: 'john_foos',
            name: 'John Foos',
          },
        ],
      },
      {
        id: 'mark_sports',
        name: 'Mark Sports',
        logo: 'TODO',
        url: 'https://www.marksports.com.ar',
        offersUrl:
          'https://www.marksports.com.ar/153?PS=70&map=productClusterIds&O=OrderByReleaseDateDESC',
        brands: [
          {
            id: 'topper',
            name: 'Topper',
          },
          {
            id: 'adidas',
            name: 'Adidas',
          },
          {
            id: 'new_balance',
            name: 'New Balance',
          },
          {
            id: 'nike',
            name: 'Nike',
          },
          {
            id: 'puma',
            name: 'Puma',
          },
          {
            id: 'reebok',
            name: 'Reebok',
          },
        ],
      },
      {
        id: 'tienda_dash',
        name: 'Tienda Dash',
        logo: 'TODO',
        url: 'https://www.tiendadash.com.ar',
        offersUrl:
          'https://www.tiendadash.com.ar/153/180?PS=50&map=productClusterIds,productClusterIds&O=OrderByReleaseDateDESC',
        brands: [
          {
            id: 'asics',
            name: 'Asics',
          },
          {
            id: 'umbro',
            name: 'Umbro',
          },
          {
            id: 'fila',
            name: 'Fila',
          },
          {
            id: 'adidas',
            name: 'Adidas',
          },
          {
            id: 'new_balance',
            name: 'New Balance',
          },
          {
            id: 'nike',
            name: 'Nike',
          },
          {
            id: 'puma',
            name: 'Puma',
          },
        ],
      },
      {
        id: 'dafiti',
        name: 'Dafiti',
        logo: 'TODO',
        url: 'https://www.dafiti.com.ar',
        offersUrl: '',
        brands: [
          {
            id: 'adidas',
            name: 'Adidas',
          },
          {
            id: 'converse',
            name: 'Converse',
          },
          {
            id: 'fila',
            name: 'Fila',
          },
          {
            id: 'lacoste',
            name: 'Lacoste',
          },
          {
            id: 'new_balance',
            name: 'New Balance',
          },
          {
            id: 'nike',
            name: 'Nike',
          },
          {
            id: 'puma',
            name: 'Puma',
          },
          {
            id: 'reebok',
            name: 'Reebok',
          },
          {
            id: 'salomon',
            name: 'Salomon',
          },
          {
            id: 'topper',
            name: 'Topper',
          },
          {
            id: 'umbro',
            name: 'Umbro',
          },
          {
            id: 'asics',
            name: 'Asics',
          },
          {
            id: 'diadora',
            name: 'Diadora',
          },
          {
            id: 'iguana',
            name: 'Iguana',
          },
          {
            id: 'jaguar',
            name: 'Jaguar',
          },
          {
            id: 'kevingstone',
            name: 'Kevingstone',
          },
          {
            id: 'penalty',
            name: 'Penalty',
          },
          {
            id: 'reef',
            name: 'Reef',
          },
        ],
      },
      {
        id: 'showsport',
        name: 'ShowSport',
        logo: 'TODO',
        url: 'https://www.showsport.com.ar',
        offersUrl: '',
        brands: [
          {
            id: 'adidas',
            name: 'Adidas',
          },
          {
            id: 'fila',
            name: 'Fila',
          },
          {
            id: 'new_balance',
            name: 'New Balance',
          },
          {
            id: 'nike',
            name: 'Nike',
          },
          {
            id: 'puma',
            name: 'Puma',
          },
          {
            id: 'reebok',
            name: 'Reebok',
          },
          {
            id: 'topper',
            name: 'Topper',
          },
          {
            id: 'umbro',
            name: 'Umbro',
          },
          {
            id: 'penalty',
            name: 'Penalty',
          },
        ],
      },
    ];
    return Observable.create((observer: Subscriber<Supplier[]>) => {
      observer.next(suppliers);
      observer.complete();
    });
  }
}
