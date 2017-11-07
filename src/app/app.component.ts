import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  items = [true,false,true,true,false,true,true,true,true,true];
  switch = 'ON';
  
  changeSwitch(index ){
    this.items[index] = !(this.items[index]);
}
}
