import { Component, OnInit, Input } from '@angular/core';
import { Child } from '../status-form/child.model';
@Component({
  selector: 'app-children-status',
  templateUrl: './children-status.component.html',
  styleUrls: ['./children-status.component.css']
})
export class ChildrenStatusComponent implements OnInit {
  @Input() children: Child[];
  
  constructor() { }

  ngOnInit() {
  }

}
