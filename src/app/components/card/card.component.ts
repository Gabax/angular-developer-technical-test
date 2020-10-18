import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() user: any;

  @Output() clickEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  output() {
    this.clickEmitter.emit(1);
  }
}
