import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../base.service';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { User } from '../../models/users/user.model';

@Injectable()
export class UserService extends BaseService<User> {
  TAG = 'UserService';
  private readonly controller = 'Users';
  private entitiesBehaviorSubject: BehaviorSubject<User[]>;
  public entitiesObservable: Observable<User[]>;
  private entityBehaviorSubject: BehaviorSubject<User>;
  public entityObservable: Observable<User>;
  private currentUserBehaviorSubject: BehaviorSubject<User>;
  public currentUserObservable: Observable<User>;

  constructor(private http: HttpClient) {
    super(http, 'Users');
    this.entitiesBehaviorSubject = new BehaviorSubject<User[]>([]);
    this.entitiesObservable = this.entitiesBehaviorSubject.asObservable();
    this.entityBehaviorSubject = new BehaviorSubject<User>(null);
    this.entityObservable = this.entityBehaviorSubject.asObservable();
    this.currentUserBehaviorSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem(environment.localStorageItemName))
    );
    this.currentUserObservable = this.currentUserBehaviorSubject.asObservable();
  }

  public get entities(): User[] {
    return this.entitiesBehaviorSubject.value;
  }

  public setEntities(entities: User[]): void {
    this.entitiesBehaviorSubject.next(entities);
  }

  public get entity(): User {
    return this.entityBehaviorSubject.value;
  }

  public setEntity(entity: User): void {
    this.entityBehaviorSubject.next(entity);
  }

  public get currentUser(): User {
    return this.currentUserBehaviorSubject.value;
  }

  public setCurrentUser(user: User): void {
    localStorage.setItem(
      environment.localStorageItemName,
      JSON.stringify(user)
    );
    this.currentUserBehaviorSubject.next(user);
  }

  /************************* BEGIN: OVERRIDDEN BASE METHODS **************************/

  /**
   * Overridden base method
   */
  public getAll(): Observable<User[]> {
    return super.getAll((response) => {
      this.setEntities(response);
    });
  }

  /**
   * Overridden base method
   */
  public getById(id: string): Observable<User> {
    return super.getById(id, (response) => {
      this.setEntity(response);
    });
  }

  /**
   * Overridden base method
   */
  public add(entity: User) {
    return super.add(entity, (response) => {
      this.entities.push(entity);
      this.setEntities(this.entities);
    });
  }

  /**
   * Overridden base method
   */
  public edit(id: string, entity: User) {
    return super.edit(id, entity, (response) => {
      const index = this.entities.findIndex((e) => e.id == id);
      if (index >= 0) {
        this.entities[index] = entity;
        this.setEntities(this.entities);
      }
    });
  }

  /**
   * Overridden base method
   */
  public delete(id: string) {
    return super.delete(id, (response) => {
      const index = this.entities.findIndex((e) => e.id == id);
      if (index >= 0) {
        this.entities.splice(index, 1);
        this.setEntities(this.entities);
      }
    });
  }

  /************************* END: OVERRIDDEN BASE METHODS **************************/

  public login(username: string, password: string): Observable<boolean> {
    const body = new URLSearchParams();
    body.append('grant_type', 'password');
    body.append('UserName', username);
    body.append('Password', password);
    body.append('scope', 'authserver');
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic YXV0aHNlcnZlcjp6M29LV2dwWDRKWnVsVmxnbkNDWDdmZkRrTmJRSDR6Vg==',
      }),
    };
    const url = `${environment.api.auth}connect/token`;
    return this.http.post(url, body.toString(), options).pipe(
      map((response: any) => {
        console.log(`${this.TAG} > login > response`, response);
        if (!response) {
          return false;
        }
        this.setCurrentUser(response);
        console.log(`${this.TAG} > login > this.currentUser`, this.currentUser);
        return true;
      })
    );
  }

  public logout(): void {
    localStorage.removeItem(environment.localStorageItemName);
    this.currentUserBehaviorSubject.next(null);
  }
}
