import { Injectable } from '@angular/core';
import { Pais } from '../model/pais';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaisService {

  private readonly API = 'http://localhost:8080/senac-backend-victoria/rest/pais'
  constructor(private httpClient: HttpClient) { }

  consultarTodosPaises (): Observable<Array<Pais>> {
    return this.httpClient.get<Array<Pais>>(this.API + '/todos')
  }


}
