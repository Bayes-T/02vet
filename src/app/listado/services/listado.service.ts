import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Injectable, Input } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { Mascota } from '../interfaces/mascotas.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  public mascotaFilter:any
  public listadoMascotas:Mascota[] = []
  public editPet!:Mascota

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

  changevalue(obj:Mascota){
    let objeto:Mascota
    return objeto = {...obj, mascota : "EDITADO"}
  }



  emitEditById(id:string):void{

    this.editPet = this.listadoMascotas.find(mascota => mascota.id == id)!

    console.log(this.editPet)

    if(this.listadoMascotas.includes(this.editPet)){
      this.editPet.mascota = "Editado"
    }

    this.listadoMascotas.forEach(mascota => {
      if(mascota.id == id){
       return mascota == this.editPet
      } else {
        return mascota
      }
    })
  }
}
