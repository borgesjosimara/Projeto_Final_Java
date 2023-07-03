import { CriarCadastroComponent } from './componentes/cadastro/criar-cadastro/criar-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarCadastroComponent } from './componentes/cadastro/listar-cadastro/listar-cadastro.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarCadastro',
    pathMatch: 'full'
  },
  {
    path: 'criarCadastro',
    component: CriarCadastroComponent
  },
  {
    path: 'listarCadastro',
    component: ListarCadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
