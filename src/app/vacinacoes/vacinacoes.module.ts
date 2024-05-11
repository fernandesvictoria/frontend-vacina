import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VacinacoesRoutingModule } from './vacinacoes-routing.module';
import { VacinacaoDetalheComponent } from './vacinacao-detalhe/vacinacao-detalhe.component';
import { FormsModule } from '@angular/forms';
import { VacinasRoutingModule } from '../vacinas/vacinas-routing.module';
import { VacinacaoListagemComponent } from './vacinacao-listagem/vacinacao-listagem.component';


@NgModule({
  declarations: [
    VacinacaoListagemComponent,
    VacinacaoDetalheComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    VacinacoesRoutingModule
  ]
})
export class VacinacoesModule { }
