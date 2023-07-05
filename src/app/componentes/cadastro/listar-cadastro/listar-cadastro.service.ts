import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from 'src/app/model/servico';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarCadastroService {

  

  constructor(private http: HttpClient) { }

  listarServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`api/servicos`);
  }

  excluirServico(servico: Servico): Observable<Servico> {
    return this.http.delete<Servico>( "/" + servico.id);
  }




}
