import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servico } from 'src/app/model/servico';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarCadastroService {

  private apiUrl = 'http://localhost:8080/servico'; // URL da API para listar os cadastros

  constructor(private http: HttpClient) { }

  listarServicos(): Observable<Servico[]> {
    return this.http.get<Servico[]>(this.apiUrl);
  }

  excluirServico(servico: Servico): Observable<Servico> {
    return this.http.delete<Servico>(this.apiUrl + "/" + servico.id);
  }




}
