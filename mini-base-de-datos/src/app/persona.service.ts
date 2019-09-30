import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';//para poder meter los observables

import { Persona } from './personas/persona';
import { PERSONAS } from './personas/moc-personas';


@Injectable({
  providedIn: 'root',
})

export class PersonaService {

  constructor() {}
  
  getPersonas(): Observable<Persona[]> {
    return of(PERSONAS);
  }
}
