import { Component } from '@angular/core';
import { Mascota } from '../../interfaces/mascotas.interfaces';
import { ListadoService } from '../../services/listado.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private listadoservice:ListadoService){}

  get listadoCitas():Mascota[] {
    return [...this.listadoservice.listadoMascotas]
  }

  onNewPet(mascota:Mascota):void {
    this.listadoservice.onNewPets(mascota)
  }

  onDeletePet(id:string):void{
    this.listadoservice.DeletebyId(id)
  }
}
