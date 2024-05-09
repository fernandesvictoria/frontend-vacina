import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { Pais } from '../../shared/model/pais';
import { Pessoa } from '../../shared/model/pessoa';
import { VacinasService } from '../../shared/service/vacinas.service';
import Swal from 'sweetalert2';
import { PaisService } from '../../shared/service/pais.service';
import { PessoaService } from '../../shared/service/pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrl: './vacina-detalhe.component.scss',
})
export class VacinaDetalheComponent implements OnInit {
  public vacina: Vacina = new Vacina();
  public paises: Array<Pais> = [];
  public pesquisadores: Array<Pessoa>;
  public idVacina: number;

  constructor(
    private vacinasService: VacinasService,
    private paisService: PaisService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.consultarTodosPaises();
    this.consultarPesquisadores();
    this.route.params.subscribe((params) => {
      this.idVacina = params['id'];
      if (this.idVacina) {
        this.consultarVacinaId();
      }
    });
  }

  salvar(): void {
    if (this.idVacina) {
      this.editarVacina();
    } else {
      this.salvarNovaVacina();
    }
  }

  private editarVacina(): void {
    this.vacinasService.editar(this.vacina).subscribe(
      (resposta) => {
      Swal.fire('Vacina atualizada com sucesso!', '', 'success');
      this.voltar();
    },
    (erro) => {
      Swal.fire('Erro ao atualizar vacina: ' + erro.error.mensagem, 'error')
    }
  );
  }

  public salvarNovaVacina(): void {
    this.vacinasService.salvar(this.vacina).subscribe(
      (resultado) => {
        this.vacina = resultado;
        Swal.fire({
          icon: 'success',
          text: 'Vacina salva com sucesso!',
        });
        this.voltar();
      },
      (erro) => {
        Swal.fire({
          icon: 'error',
          text: 'Erro ao salvar nova vacina: ' + erro.error.mensagem,
        });
        console.error('Erro ao salvar nova vacina.');
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

  public consultarVacinaId(): void {
    this.vacinasService.consultarVacinaID(this.idVacina).subscribe(
      (vacina) => {
        this.vacina = vacina;
      },
      (erro) => {
        Swal.fire(
          'Erro ao editar vacina ' + this.vacina.nome + '.',
          erro,
          'error'
        );
      }
    );
  }
  public voltar(): void {
    this.router.navigate(['/vacinas']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
