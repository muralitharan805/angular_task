import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() passData: any;
  @Output() childpassData = new EventEmitter();
  constructor() {}
  fireEvent() {
    this.childpassData.emit('hello receive data from child');
  }
  ngOnInit() {}
}
