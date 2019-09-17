import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';

import { HttpClientModule }    from '@angular/common/http';//habilitar servicios http para que los clientes HTTP sean accesibles desde cualquier sitio de la app
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    DetallePersonaComponent
  ],
  imports: [
    BrowserModule,
    //me falta el appRouting?
    //AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
