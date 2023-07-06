import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Servico } from 'src/app/model/servico';
import { ListarCadastroService } from '../listar-cadastro/listar-cadastro.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-listar-cadastro',
  templateUrl: './criar-cadastro.component.html',
  styleUrls: ['./criar-cadastro.component.scss'],
})
export class CriarCadastroComponent implements OnInit {
  servico!: Observable<Servico[]>;

  servicoForm!: FormGroup;
 

  constructor(private router : Router,private formBuilder: FormBuilder, private listarService : ListarCadastroService) { }

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.servicoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      tipoUnha: ['', Validators.required],
      valor: ['', Validators.required],
      periodo: ['', Validators.required]
    });
  }
  onSubmit() {
    this.listarService.salvarServico(this.servicoForm.value).subscribe(
      (data) => {
        console.log('Serviço salvo com sucesso!', data);
        this.router.navigate(['']);
      },
      (error) => {
        console.log('Erro ao salvar o serviço!', error);
      }
    );
   /*  redirecionar a lista de cadastro */
      
  }

  Cancelar() {
    alert('cadastro cancelado!');
  }
}
