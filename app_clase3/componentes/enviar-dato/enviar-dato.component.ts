import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-enviar-dato',
  templateUrl: './enviar-dato.component.html',
  styleUrls: ['./enviar-dato.component.css']
})
export class EnviarDatoComponent implements OnInit {
  @Output() enviarDato:EventEmitter<any> = new EventEmitter<any>();
  valor:string;
  constructor() { }

  ngOnInit() {
  }

  mostrarDato(){
    this.enviarDato.emit(this.valor);
  }

}
