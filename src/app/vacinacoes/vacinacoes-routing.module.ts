import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacinacaoDetalheComponent } from './vacinacao-detalhe/vacinacao-detalhe.component';
import { VacinacaoListagemComponent } from './vacinacao-listagem/vacinacao-listagem.component';

const routes: Routes = [
  { path: '', component: VacinacaoListagemComponent },
  { path: 'detalhe', component: VacinacaoDetalheComponent },
  { path: 'detalhe/:id', component: VacinacaoDetalheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VacinacoesRoutingModule {}
