import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-poke-search',
  templateUrl: './poke-search.component.html',
  styleUrls: ['./poke-search.component.scss']
})
export class PokeSearchComponent implements OnInit {
  @Output() emmitSearch: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  search(value: string){
    this.emmitSearch.emit(value);
  }
}
