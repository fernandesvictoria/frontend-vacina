import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrosListagemComponent } from './carros-listagem/carros-listagem.component';
import { MontadorasConsultaComponent } from './montadoras-consulta/montadoras-consulta.component';

const routes: Routes = [
  { path: 'lista', component: CarrosListagemComponent },
  { path: 'montadoras', component: MontadorasConsultaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrosRoutingModule {}
