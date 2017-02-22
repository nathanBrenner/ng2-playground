import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Child } from './child.model';
@Component({
  selector: 'app-status-form',
  templateUrl: './status-form.component.html',
  styleUrls: ['./status-form.component.css']
})
export class StatusFormComponent implements OnInit {
  @Output() updateChild = new EventEmitter();
  child = new Child('', '');

  constructor() { }

  ngOnInit() {}
  onSubmit(form){
    this.updateChild.emit(form.value);
    form.reset();
  }
}
