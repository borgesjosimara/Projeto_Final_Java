import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-cadastro',
  templateUrl: './criar-cadastro.component.html',
  styleUrls: ['./criar-cadastro.component.scss'],
})
export class CriarCadastroComponent implements OnInit {
  cadastro = {
    id: '1',
    conteudo: 'cadastro clientes',
    autoria: 'projeto',
    modelo: 'modelo1 ',
  };

  constructor() {}

  ngOnInit(): void {}

  criarCadastro() {
    alert('Novo cadastro criado!');
  }

  Cancelar() {
    alert('cadastro cancelado!');
  }
}
