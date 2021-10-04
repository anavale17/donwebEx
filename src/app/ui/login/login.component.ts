import { RegExpPatterns } from './../../helpers/reg-exp-patterns.helper';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users/user.model';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  TAG = 'LoginComponent';
  formGroup: FormGroup;
  hasLoginError: boolean | null;
  hiden: boolean;

  constructor(
    private _formBuilder: FormBuilder,
    private _userService: UserService,
    private _router: Router
  ) {
    this.formGroup = this.createFormGroup();
    this.hasLoginError = null;
    this.hiden = true;
  }
  createFormGroup(): FormGroup {
    const formGroup = this._formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
    return formGroup;
  }
  login() {
    const rawValue = this.formGroup.getRawValue();
    console.log(`${this.TAG} > login > rawValue`, rawValue);
    if (
      !rawValue ||
      _.isEmpty(rawValue.username) ||
      _.isEmpty(rawValue.password)
    ) {
      return;
    }
    this.hasLoginError = false;
    setTimeout(() => {
      if (rawValue.username == 'admin' && rawValue.password == '123123') {
        console.log(`${this.TAG} > login > _angularFireAuth > success`);
        const user: User = new User();
        user.username = 'admin';
        user.name = 'Ana';
        user.surname = 'Vale';
        this._userService.setCurrentUser(user);
        this._router.navigate(['ui/home']);
      } else {
        console.error(`${this.TAG} > login > _angularFireAuth > error`);
        this.hasLoginError = true;
      }
    }, 2 * 1000);
  }
}
