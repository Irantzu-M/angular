import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';//para poder meter los observables

import { Persona } from './personas/persona';
import { PERSONAS } from './personas/moc-personas';


@Injectable({
  providedIn: 'root',
})

export class PersonaService {

  constructor() {}
  
  getMockPersonas(): Observable<Persona[]> {
    return of(PERSONAS);
  }

  
  getPersona(id: number): Observable<Persona> {
    return of(PERSONAS.find(persona => persona.id === id));
  }
}
