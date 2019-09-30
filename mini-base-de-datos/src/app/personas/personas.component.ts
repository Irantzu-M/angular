import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonaService } from '../persona.service';//importamos aquí el service del que vamos a hacer uso

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  
  personas: Persona[];
  personaSeleccionada: Persona;

  constructor(private servicioPersona: PersonaService) {
  }
  

  ngOnInit() {
    this.getPersonas();
  }

  
  getPersonas(): void {
    this.servicioPersona.getMockPersonas().subscribe(personas => this.personas = personas);
  }

}
