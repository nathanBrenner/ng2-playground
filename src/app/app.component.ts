import { Component } from '@angular/core';
import { Child } from './status-form/child.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  children: Child[];

  acceptForm(payload){
    this.children = [...this.children, payload];
    console.log(payload);
    // this.children.push(payload);
  }
}
