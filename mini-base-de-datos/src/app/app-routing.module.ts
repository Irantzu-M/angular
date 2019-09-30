import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: 'personas', component: PersonasComponent },
    { path: 'detalle', component: DetallePersonaComponent },
    { path: 'detalle/:id', component: DetallePersonaComponent }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { } 


