import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from 'src/app/model/servico';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarCadastroService {

  readonly API = 'api/servicos';

  constructor(private http: HttpClient) { }

  listarServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.API);
  }

  excluirServico(servico: Servico): Observable<Servico> {
    return this.http.delete<Servico>( this.API+"/"+ servico.id);
  }

  salvarServico(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(this.API, servico);
  }




}
