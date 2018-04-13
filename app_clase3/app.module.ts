import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MostrarDatoComponent } from './componentes/mostrar-dato/mostrar-dato.component';
import { EnviarDatoComponent } from './componentes/enviar-dato/enviar-dato.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarDatoComponent,
    EnviarDatoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
