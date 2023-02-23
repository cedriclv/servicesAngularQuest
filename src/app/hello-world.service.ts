import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor() { }

  sayHello(someone: string) {
    return ('Hello ' + someone);
  }
}
