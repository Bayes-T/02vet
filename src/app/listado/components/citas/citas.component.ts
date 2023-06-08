import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Mascota } from '../../interfaces/mascotas.interfaces';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {

  @Input()
  public citasMascotas:Mascota[] = [{id:"", mascota:"", edad:0, hora:""}]

  @Output()
  onDeletePet: EventEmitter<string> = new EventEmitter()

  
  deleteById(id:string):void{
    this.onDeletePet.emit(id)
  }


  @Output()
  onEditPet: EventEmitter<string> = new EventEmitter()
  editById(id:string):void {
    this.onDeletePet.emit(id)
  }

}
