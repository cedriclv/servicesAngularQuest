import { Component } from '@angular/core';
import { HelloWorldService } from "./hello-world.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'questServices';
  me: string = 'titi';

  constructor(private helloService: HelloWorldService  ){}

  sayHelloToMe(){
    return this.helloService.sayHello(this.me);
  }
}
