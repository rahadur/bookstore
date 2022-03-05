import { Injectable } from '@angular/core';

@Injectable()
export class HomeService {

  constructor() { }

  getHello(): string {
    return 'Hello Nabib';
  }
}
