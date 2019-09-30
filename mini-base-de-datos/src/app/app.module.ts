import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';

import { HttpClientModule }    from '@angular/common/http';//habilitar servicios http para que los clientes HTTP sean accesibles desde cualquier sitio de la app
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    DetallePersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
