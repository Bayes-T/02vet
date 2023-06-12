import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import {v4 as uuid} from 'uuid'


import { Mascota } from '../../interfaces/mascotas.interfaces';
import { ListadoService } from '../../services/listado.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor(private listadoservice:ListadoService){}

  //esta propiedad es sólo para incializar? solo para almacenar los datos
  public mascota:Mascota = {
    id: uuid(),
    mascota:"",
    edad:0,
    hora:""
  }


  @Output()
  public onNewPet: EventEmitter<Mascota> = new EventEmitter

  addPet():void{
    this.onNewPet.emit(this.mascota)
    console.log(this.mascota)
    this.mascota = {id: uuid(), mascota:"", edad:0, hora:""}
  }


  @Output()
  public onEditPet: EventEmitter<Mascota> = new EventEmitter
  editPet():void{
    this.onEditPet.emit(this.mascota)
  }

  @ViewChild("focus")
  public inputForm! : ElementRef<HTMLInputElement>


  onFocusInput(){
    this.inputForm.nativeElement.focus()
  }
  onEditbyId(id:string):void{
    this.onFocusInput()
    this.listadoservice.emitEditById(id)
  }

}
