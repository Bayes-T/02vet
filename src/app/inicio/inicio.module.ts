import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadingComponent } from './pages/heading/heading.component';
import { NavComponent } from './components/nav/nav.component';



@NgModule({
  declarations: [HeadingComponent, NavComponent],
  imports: [
    CommonModule
  ],
  exports: [HeadingComponent]
})
export class InicioModule { }


