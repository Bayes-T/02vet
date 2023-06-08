import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasComponent } from './components/citas/citas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CitasComponent,
    FormularioComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], 
  exports: [MainPageComponent]
})
export class ListadoModule { }
