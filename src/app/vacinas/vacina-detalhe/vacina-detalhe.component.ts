import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { VacinasService } from '../../shared/service/vacinas.service';
import Swal from 'sweetalert2';
import { PaisService } from '../../shared/service/pais.service';
import { PessoaService } from '../../shared/service/pessoa.service';


@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss',
})
export class VacinaDetalheComponent implements OnInit {
  public vacina: Vacina = new Vacina();
   public paises: Array<Pais>=[];
   public pesquisadores:Array<Pessoa>

  constructor(private vacinasService: VacinasService,private paisService: PaisService,private pessoaService: PessoaService) {}
  ngOnInit(): void {
   this.consultarTodosPaises();
   this.consultarPesquisadores();
  }
  public salvarNovaVacina() {
    this.vacinasService.salvar(this.vacina).subscribe(
      (resultado) => {
        this.vacina = resultado;
        Swal.fire('Vacina salva com sucesso!');
      },
      (erro) => {
        Swal.fire({
          icon: 'error',
          text: 'Erro ao salvar nova Vacina.',
        });
        console.error('Erro ao salvar nova Vacina');
      }
    );
  }

  public consultarTodosPaises() {
    this.paisService.consultarTodosPaises().subscribe(
      (resultado) => {
        this.paises = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos os países.');
      }
    );
  }

  public consultarPesquisadores() {
    this.pessoaService.consultarPesquisadores().subscribe(
      (resultado) => {
        this.pesquisadores = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos os pesquisadores.');
      }
    );
  }

  public compareById (r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
