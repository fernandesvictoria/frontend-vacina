
import { Routes } from '@angular/router';
import { CarrosModule } from './carros/carros.module';

export const routes: Routes = [
  // {path:'',redirectTo: 'vacinas',pathMatch:'full'},
  {
    path: 'vacinas',
    loadChildren: () =>
      import('./vacinas/vacinas.module').then((m) => m.VacinasModule),
  },
  {
    path: 'vacinacoes',
    loadChildren: () =>
      import('./vacinacoes/vacinacoes.module').then((m) => m.VacinacoesModule),
  },

  {
    path: 'carros',
    loadChildren:()=>
      import('./carros/carros.module').then((m)=>m.CarrosModule),
  }
];
