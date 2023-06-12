import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../interfaces/mascotas.interfaces';

import { ListadoService } from '../../services/listado.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {

  constructor(private listadoservice:ListadoService){}

  @Input()
  public citasMascotas:Mascota[] = [{id:"", mascota:"", edad:0, hora:""}]

  @Output()
  onDeletePet: EventEmitter<string> = new EventEmitter()  
  deleteById(id:string):void{
    this.onDeletePet.emit(id)
  }

  @Output()
  onEditPet: EventEmitter<string> = new EventEmitter()
  emitEditById(id:string):void {
    this.onEditPet.emit(id)
  }

}
