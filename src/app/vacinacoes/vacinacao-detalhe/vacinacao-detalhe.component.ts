import { PessoaService } from './../../shared/service/pessoa.service';
import { Component } from '@angular/core';
import { Vacinacao } from '../../shared/model/vacinacao';
import { Vacina } from '../../shared/model/vacina';
import { VacinacaoService } from '../../shared/service/vacinacao.service';
import { VacinasService } from '../../shared/service/vacinas.service';
import Swal from 'sweetalert2';
import { Pessoa } from '../../shared/model/pessoa';

@Component({
  selector: 'app-vacinacao-detalhe',
  // standalone: true,
  // imports: [],
  templateUrl: './vacinacao-detalhe.component.html',
  styleUrl: './vacinacao-detalhe.component.scss',
})
export class VacinacaoDetalheComponent {
  public vacinacao: Vacinacao = new Vacinacao();
  public vacinas: Array<Vacina> = [];
  public pessoas: Array<Pessoa> = [];

  constructor(
    private vacinacaoService: VacinacaoService,
    private vacinasService: VacinasService,
    private pessoaService: PessoaService
  ) {}

  ngOnInit(): void {
    this.consultarVacinas();
  }

  salvarNovaVacinacao(): void {
    this.vacinacaoService.salvar(this.vacinacao).subscribe(
      (resultado) => {
        this.vacinacao = resultado;
        Swal.fire({
          icon: 'success',
          text: 'Vacinação salva com sucesso!',
        });
      },
      (erro) => {
        Swal.fire({
          icon: 'error',
          text: 'Erro ao salvar nova vacinação: ' + erro.error.mensagem,
        });
        console.error('Erro ao salvar nova vacinação.');
      }
    );
  }

  private consultarVacinas(): void {
    this.vacinasService.listarTodas().subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao consultar todos as vacinas');
      }
    );
  }

  public consultarPessoas(): void {
    this.pessoaService.listarTodas().subscribe(
      (resultado) => {
        this.pessoas = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar todos os usuários.');
      }
    );
  }

}
