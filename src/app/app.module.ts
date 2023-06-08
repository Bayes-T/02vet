import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioModule } from './inicio/inicio.module';
import { ListadoModule } from './listado/listado.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InicioModule,
    ListadoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
