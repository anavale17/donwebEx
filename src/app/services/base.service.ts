import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Base } from '../models/base.model';

export class BaseService<T extends Base> {
  public readonly HttpClient: HttpClient;
  private readonly Controller: string;

  constructor(private _httpClient: HttpClient, controller: string) {
    this.HttpClient = _httpClient;
    this.Controller = controller;
  }

  public getAll(callback?: any): Observable<T[]> {
    const url: string = `${this.Controller}/all`;
    return this.HttpClient.get<T[]>(url).pipe(
      map((response) => {
        if (callback) {
          callback(response);
        }
        return response;
      })
    );
  }

  public getById(id: string, callback?: any): Observable<T> {
    const url: string = `${this.Controller}/id/${id}`;
    return this.HttpClient.get<T>(url).pipe(
      map((response) => {
        if (callback) {
          callback(response);
        }
        return response;
      })
    );
  }

  public count(): Observable<number> {
    const url: string = `${this.Controller}/count`;
    return this.HttpClient.get<number>(url).pipe(
      map((response) => {
        return response;
      })
    );
  }

  public add(entity: T, callback?: any) {
    const url: string = `${this.Controller}/add`;
    return this.HttpClient.post(url, entity).pipe(
      map((response) => {
        if (callback) {
          callback(response);
        }
      })
    );
  }

  public edit(id: string, entity: T, callback?: any) {
    const url: string = `${this.Controller}/edit/${id}`;
    return this.HttpClient.put(url, entity).pipe(
      map((response) => {
        if (callback) {
          callback(response);
        }
      })
    );
  }

  public delete(id: string, callback?: any) {
    const url: string = `${this.Controller}/delete/${id}`;
    return this.HttpClient.delete(url).pipe(
      map((response) => {
        if (callback) {
          callback(response);
        }
      })
    );
  }
}
