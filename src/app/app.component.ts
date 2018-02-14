import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flight Search Engine';
   constructor() {
    console.log(VERSION.full); // print 2.4.10-rc.0
  }
}
