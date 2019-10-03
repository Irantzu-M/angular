import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { Persona } from '../personas/persona';
import { Persona } from '../personas/persona';
import { PersonasComponent } from '../personas/personas.component';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-detalle-persona',
  templateUrl: './detalle-persona.component.html',
  styleUrls: ['./detalle-persona.component.scss']
})
export class DetallePersonaComponent implements OnInit {

  @Input() personaSeleccionada : Persona;
  persona : Persona;

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,
    //private location: Location
    ) { }

  ngOnInit() {
    this.getPersona();
  }

  
  getPersona(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.personaService.getPersona(id)
      .subscribe(personaSeleccionada => this.personaSeleccionada = personaSeleccionada);
  }




}
