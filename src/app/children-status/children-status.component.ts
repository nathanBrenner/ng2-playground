import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-children-status',
  templateUrl: './children-status.component.html',
  styleUrls: ['./children-status.component.css']
})
export class ChildrenStatusComponent implements OnInit {
  @Input() children;
  constructor() { }

  ngOnInit() {
  }

}
