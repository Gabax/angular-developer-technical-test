import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() searchedValueEmitter: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  searchedValue(value: string) {
    this.searchedValueEmitter.emit(value);
  }
}
