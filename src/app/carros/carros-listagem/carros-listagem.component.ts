import { Component, OnInit } from '@angular/core';
import { CarrosService } from '../../shared/service/carros.service';
import { Carro } from '../../shared/model/carro';
import { CarroSeletor } from '../../shared/model/seletor/carro.seletor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carros-listagem',
  // standalone: true,
  // imports: [],
  templateUrl: './carros-listagem.component.html',
  styleUrl: './carros-listagem.component.scss',
})
export class CarrosListagemComponent implements OnInit {
  public carros: Carro[] = [];
  public seletor: CarroSeletor = new CarroSeletor();

  constructor(private carrosService: CarrosService, private router: Router) {}

  ngOnInit(): void {}

  // private consultarTodosCarros() {
  //   this.carrosService.listarTodosCarros().subscribe(
  //     (resultado) => {
  //       // retorno bem sucedido
  //       this.carros = resultado;
  //     },
  //     (erro) => {
  //       console.error('Erro ao consultar Carros', erro);
  //     }
  //   );
  // }

  public pesquisar() {
    this.carrosService.listarComSeletor(this.seletor).subscribe(
      (resultado) => {
        if (resultado.length === 0) {
          console.error('Nenhum veículo encontrado');
          // lista vazia
        } else {
          this.carros = resultado;
        }
      },
      (erro) => {
        console.error('Erro ao consultar carros', erro);
      }
    );
  }


  public limpar() {
    this.seletor = new CarroSeletor();
  }
}
