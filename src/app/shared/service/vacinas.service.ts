import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';
import { VacinaSeletor } from '../model/seletor/vacina.seletor';

@Injectable({
  providedIn: 'root',
})
export class VacinasService {

  // URL base de API vacinas
  private readonly API =
    'http://localhost:8080/senac-backend-victoria/rest/vacina';
  constructor(private httpClient: HttpClient) {}

  listarTodas(): Observable<Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>>(this.API + '/todas');
  }

 listarComSeletor(seletor: VacinaSeletor): Observable<Array<Vacina>> {
    return this.httpClient.post<Array<Vacina>>(this.API + '/filtrar', seletor);
  }

  consultarVacinaID(idVacina: number): Observable<Vacina> {
    return this.httpClient.get<Vacina>(this.API + '/consultar/' + idVacina )
  }

  excluir (vacinaId: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.API + '/excluir/' + vacinaId)
  }


  salvar(novaVacina: Vacina): Observable<Vacina> {
    return this.httpClient.post<Vacina>(this.API + '/salvar', novaVacina)
  }


  editar(vacinaEditada: Vacina): Observable<boolean>{
    return this.httpClient.put<boolean>(this.API + '/alterar', vacinaEditada)
  }
}
