import { Component, OnInit } from '@angular/core';
import { MontadorasService } from '../../shared/service/montadoras.service';
import { Router } from '@angular/router';
import { Montadora } from '../../shared/model/montadora';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-montadoras-consulta',
  // standalone: true,
  // imports: [],
  templateUrl: './montadoras-consulta.component.html',
  styleUrl: './montadoras-consulta.component.scss',
})
export class MontadorasConsultaComponent implements OnInit {
  public montadora: Montadora = new Montadora();
  public montadoras: Montadora[] = [];

  constructor(
    private montadoraService: MontadorasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.consultarTodasMontadoras();
  }

  private consultarTodasMontadoras() {
    this.montadoraService.listarTodasMontadoras().subscribe(
      (resultado) => {
        // retorno bem sucedido
        this.montadoras = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar montadoras', erro);
      }
    );
  }

  consultarEstoque() {
    if (this.montadora == null) {
      Swal.fire('Selecione uma montadora!');
      return;
    }else
    
    this.montadoraService.consultarEstoque(this.montadora.id).subscribe(
      (quantidade: number) => {
        Swal.fire({
          title: 'Estoque Consultado',
          text: `A montadora possui ${quantidade} veículo(s) em estoque.`,
          icon: 'info',
          confirmButtonText: 'OK'
        });
      },
      (erro) => {
        Swal.fire('Erro ao consultar estoque: ' + erro.error.mensagem, 'error');
      }
    );
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
