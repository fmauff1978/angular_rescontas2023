import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregadosComponent } from './componentes/agregados/agregados.component';
import { ContasComponent } from './componentes/contas/contas.component';

const routes: Routes = [

  {path: 'contas', component: ContasComponent},
  {path: 'agregados', component: AgregadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
