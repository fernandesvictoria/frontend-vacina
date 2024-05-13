
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacinasRoutingModule } from './vacinas-routing.module';
import { VacinaListagemComponent } from './vacina-listagem/vacina-listagem.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VacinaDetalheComponent } from './vacina-detalhe/vacina-detalhe.component';


@NgModule({
  declarations: [VacinaListagemComponent, VacinaDetalheComponent],
  imports: [
    CommonModule,
    VacinasRoutingModule,
    HttpClientModule,
    FormsModule, //habilita NgModule
  ],
})
export class VacinasModule {}
