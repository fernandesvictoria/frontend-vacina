import { Component, OnInit } from '@angular/core';
import { VacinacaoService } from '../../shared/service/vacinacao.service';
import { Router } from '@angular/router';
import { Vacinacao } from '../../shared/model/vacinacao';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoaService } from '../../shared/service/pessoa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vacinacao-listagem',
  templateUrl: './vacinacao-listagem.component.html',
  styleUrl: './vacinacao-listagem.component.scss',
})
export class VacinacaoListagemComponent implements OnInit {
  public vacinacoes: Vacinacao[] = [];
  public pessoas: Array<Pessoa> = [];
  public pessoa: Pessoa = new Pessoa();

  constructor(
    private vacinacaoService: VacinacaoService,
    private pessoaService: PessoaService,private router: Router
  ) {}

  ngOnInit(): void {
    this.consultarTodasVacinacoes();
    this.consultarPessoas();
  }

  private consultarTodasVacinacoes() {
    this.vacinacaoService.listarTodasVacinacoes().subscribe(
      (resultado) => {
        // retorno bem sucedido
        this.vacinacoes = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar vacinacoes', erro);
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

  public consultarPessoaId(idPessoa: number): void {
    this.pessoaService.consultarPessoaId(idPessoa).subscribe(
      (resultado) => {
        this.pessoa = resultado;
      },
      (erro) => {
        Swal.fire('Erro ao consultar pessoa: ' + erro.error.mensagem);
      }
    );
  }


  public editar(idVacinacaoSelecionada: number): void {
    this.router.navigate(['/vacinacoes/detalhe/', idVacinacaoSelecionada]);

  }


  public excluir(id: number) {
    Swal.fire({
      title: 'Você deseja excluir?',
      text: 'Não será possível reverter a exclusão!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Sim, continue!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.vacinacaoService.excluir(id).subscribe(
          (resultado) => {
            Swal.fire({
              title: 'Excluída!',
              text: 'A vacina foi excluída com sucesso!',
              icon: 'success',
            });
            this.consultarTodasVacinacoes();
          },
          (erro) => {
            Swal.fire({
              title: 'Atenção!',
              text: 'Erro ao excluir vacina : ' + erro.error.mensagem,
              icon: 'error',
            });

            console.error('Erro ao excluir vacina.');
          }
        );
      }
    });
  }

}
