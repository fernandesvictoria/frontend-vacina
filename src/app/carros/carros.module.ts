import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosListagemComponent } from './carros-listagem/carros-listagem.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MontadorasConsultaComponent } from './montadoras-consulta/montadoras-consulta.component';


@NgModule({
  declarations: [CarrosListagemComponent,MontadorasConsultaComponent],
  imports: [
    CommonModule,
    CarrosRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CarrosModule { }

