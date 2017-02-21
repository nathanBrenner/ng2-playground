import { Component, OnInit } from '@angular/core';
import { Child } from './child.model';
@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent implements OnInit {
  child = new Child('', '');

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.child);
  }

}
