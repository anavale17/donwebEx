import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from './services/users/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  TAG = 'AppComponent';
  isLoggedIn: boolean | null;

  constructor(
    private _angularFireAuth: AngularFireAuth,
    private _router: Router,
    private _userService: UserService
  ) {
    this.isLoggedIn = null;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.initialize();
    }, 1 * 1000);
  }

  ngOnInit(): void {}

  initialize(): void {
    const currentUser = this._userService.currentUser;

    if (!currentUser) {
      this.isLoggedIn = false;
      this._router.navigate(['ui/login']);
    } else {
      this.isLoggedIn = true;
    }
  }
}
