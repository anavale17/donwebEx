import * as uuid from 'uuid';

export class Base {
  id: string;

  constructor() {
    this.id = uuid.v4();
  }
}
