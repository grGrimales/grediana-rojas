import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-buscar',
  templateUrl: './input-buscar.component.html',
  styleUrls: ['./input-buscar.component.css']
})
export class InputBuscarComponent implements OnInit {

  
  termino: string;
  @Output() onEnter: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  
  buscar() {
    this.onEnter.emit(this.termino);
  }

}
