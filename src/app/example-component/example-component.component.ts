import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent implements OnInit {

  @Input() text = 'Default';
  @Input() color = '#000000';

  @Output() clicked = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }

}
