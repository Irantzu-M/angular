import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonasService } from '../personas.service';//importamos aquí el service del que vamos a hacer uso

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  
  personas: Persona[];
  personaSeleccionada: Persona;

  constructor(private servicioPersona: PersonasService) {
    //al constructor le pasamos el servicioDepersonas
  }
  

  ngOnInit() {
    //est lo usamos para llamar al personas service cuando iniciamos el coponente
    this.servicioPersona.getPersonas().subscribe(personasRecibidas => this.personas = personasRecibidas);
    //esta es una sentencia que es la forma abreviada de lo que explicamos más abajo
    //estamos pasando una función como si fuera una variable


      /*//equivale a algo así CON FUNCIÓN TRADICIONAL
      this.personaService.getPersonas().subscribe(this.recibirPersonas);
      recibirPersonas(personasRecibidas: Personas[]){
        return this.personas = personasRecibidas;
      }
      */

      /*//otra función más intermedia es CON FUNCIÓN ANÓNIMA
      this.personaService.getPersonas().subscribe(function(personasRecibidas: Personas[]){
        return this.personas = personasRecibidas;
      })*/
  }

  
  onEdit(personaClickada: Persona){
    this.personaSeleccionada = this.personaSeleccionada;
  }

}
