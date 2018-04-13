import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  listado:Array<any> = new Array();

  mostrarAviso(dato:any){
    this.listado.push(dato);
  }
}
