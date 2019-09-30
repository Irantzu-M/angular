import { Component, OnInit } from '@angular/core';
import { Persona } from './persona';
import { PersonasService } from '../personas.service';//importamos aquí el service del que vamos a hacer uso

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
  //se pueden poner estilos directamente sin plantilla, pero no acepta Sass
  /*styles: [`
    th{
      color: blue;
    }
  `]*/
})
export class PersonasComponent implements OnInit {
  
  personas: Persona[];

  constructor(private servicioPersona: PersonasService) {
    //al constructor le pasamos el servicioDepersonas
  }
  

  ngOnInit() {
    this.getPersonas();

    
    //esto lo usamos para llamar al personas service cuando iniciamos el coponente
    //this.servicioPersona.getPersonas().subscribe(personasRecibidas => this.personas = personasRecibidas);
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

  
  getPersonas(): void {
    this.servicioPersona.getPersonas().subscribe(personas => this.personas = personas);
    /*this.personas = [
      { id: 11, nombre: 'Dr Nice' , email: 'mail@mail.mail'},
      { id: 12, nombre: 'Narco' , email: 'mail@mail.mail'},
      { id: 13, nombre: 'Bombasto' , email: 'mail@mail.mail'},
      { id: 14, nombre: 'Celeritas' , email: 'mail@mail.mail'},
      { id: 15, nombre: 'Magneta' , email: 'mail@mail.mail'},
      { id: 16, nombre: 'RubberMan' , email: 'mail@mail.mail'},
      { id: 17, nombre: 'Dynama' , email: 'mail@mail.mail'},
      { id: 18, nombre: 'Dr IQ' , email: 'mail@mail.mail'},
      { id: 19, nombre: 'Magma' , email: 'mail@mail.mail'},
      { id: 20, nombre: 'Tornado' , email: 'mail@mail.mail' }
    ]*/
  }
  /*
  onEdit(personaClickada: Persona){
    this.personaSeleccionada = this.personaSeleccionada;
  }*/

}
