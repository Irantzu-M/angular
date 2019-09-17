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

  constructor(private servicioPersona: PersonasService) {
    //al constructor le pasamos el servicioDepersonas
  }
  

  ngOnInit() {
    //est lo usamos para llamar al personas service cuando iniciamos el coponente
    this.servicioPersona.getPersonas().subscribe(
      personas => this.personas = personas//esta sentencia no la acabo de enternder
    );
  }

}
