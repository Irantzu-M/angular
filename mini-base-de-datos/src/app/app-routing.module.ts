import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonasComponent } from './personas/personas.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/detalle-persona' },
    { path: '', component: PersonasComponent },
    { path: '', component: DetallePersonaComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 