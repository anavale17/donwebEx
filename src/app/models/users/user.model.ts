import { Base } from './../base.model';

export class User extends Base {
  username: string;
  name: string;
  surname: string;
  token: string;
  email: string;
  photo: string;
  birthday: Date;

  constructor() {
    super();
    this.username = '';
    this.name = '';
    this.surname = '';
    this.token = '';
    this.email = '';
    this.photo = '';
    this.birthday = null;
  }
}
