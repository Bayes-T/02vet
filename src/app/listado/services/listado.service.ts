import { Injectable, Input } from '@angular/core';
import { Mascota } from '../interfaces/mascotas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  public mascotaFilter:any

  public listadoMascotas:Mascota[] = []

  emptySiteFilter(mascota:Mascota) {
    mascota = {     id:"",
      mascota:"",
      edad:0,
      hora:""};
  }

  changeFilter(newProperty:any,mascota:Mascota){

    this.emptySiteFilter(mascota);
    mascota.mascota = newProperty;

  }

  onNewPets(mascota: Mascota):void {
    this.listadoMascotas.push(mascota)
  }

  DeletebyId(id:string):void {
    this.listadoMascotas = this.listadoMascotas.filter (mascota => mascota.id !== id)
  }

  editById(id:string):void{
    const editPet = this.listadoMascotas.find(mascota => mascota.id = id)


    
  }

}
