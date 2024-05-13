import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Montadora } from '../model/montadora';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MontadorasService {
  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/montadora';
  constructor(private httpClient: HttpClient) {}

  listarTodasMontadoras(): Observable<Array<Montadora>> {
    return this.httpClient.get<Array<Montadora>>(this.API + '/todas');
  }

  consultarEstoque(idMontadora: number): Observable<number> {
    return this.httpClient.get<number>(
      this.API + `${this.API}/estoque-carros/${idMontadora}`
    );
  }
}
