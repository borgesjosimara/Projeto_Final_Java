import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { Servico } from 'src/app/model/servico';
import { ListarCadastroService } from './listar-cadastro.service';

@Component({
  selector: 'app-listar-cadastro',
  templateUrl: './listar-cadastro.component.html',
  styleUrls: ['./listar-cadastro.component.scss']
})
export class ListarCadastroComponent implements OnInit {
  servicos! : Observable<Servico[]>;
  constructor(
    private listarCadastroService: ListarCadastroService
  ) { 
    this.servicos = listarCadastroService.listarServicos();
  }

  ngOnInit(): void {
    this.servicos = this.listarCadastroService.listarServicos();
  }


  editar(){
    alert("Editar");
  
  }

  excluir(servico: Servico) {
    this.listarCadastroService.excluirServico(servico).subscribe(() => {
      console.log('Serviço excluído com sucesso');
      this.servicos = this.listarCadastroService.listarServicos();
    }, (error) => {
      console.log('Erro ao excluir serviço', error);
    });
  }
}
