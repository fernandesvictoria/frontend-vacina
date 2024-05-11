import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacinacao } from '../model/vacinacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VacinacaoService {
  // URL base de API vacinas
  private readonly API =
    'http://localhost:8080/senac-backend-victoria/rest/aplicacao';


    constructor(private HttpClient: HttpClient) {}

  salvar(novaVacinacao: Vacinacao): Observable<Vacinacao> {
    return this.HttpClient.post<Vacinacao>(this.API + '/salvar', novaVacinacao);
    //olhar aqui//
  }

  listarTodasVacinacoes(): Observable<Array<Vacinacao>> {
    return this.HttpClient.get<Array<Vacinacao>>(this.API + '/todas')
  }

  editar(vacinacaoEditada: Vacinacao): Observable<boolean>{
    return this.HttpClient.put<boolean>(this.API + '/alterar', vacinacaoEditada)
  }

  excluir (vacinacaoId: number): Observable<boolean> {
    return this.HttpClient.delete<boolean>(this.API + '/excluir/' + vacinacaoId)
  }

}
