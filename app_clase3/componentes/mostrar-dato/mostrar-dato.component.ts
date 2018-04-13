import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-dato',
  templateUrl: './mostrar-dato.component.html',
  styleUrls: ['./mostrar-dato.component.css']
})
export class MostrarDatoComponent implements OnInit {
  @Input() dato:Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
