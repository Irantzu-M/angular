import { Injectable } from '@angular/core';
import { Persona } from './personas/persona';
import { Observable, of } from 'rxjs';//esto se importa para poder hacer que el servicio sea observable
import { HttpClient } from '@angular/common/http';//esto es para poder pasarle cliente HTTP

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  //personas: Persona[] = [{ id: 1, nombre: 'Ana-mock', email: 'ana@gmail.com' },{ id: 2, nombre: 'Juan-mock', email: 'ana@gmail.com' }];

  constructor(private http: HttpClient) { }//para pasarle el cliente de HTTP al service

  private url = 'http://localhost:3000/personas/';//se define private para que sea una variable sólo del servicio
  getPersonas(): Observable<Persona[]> { 
    //queremos que nos devuelva un observable de un array de personas
    //return of(this.personas);
    return this.http.get<Persona[]>(this.url);
  }
}
