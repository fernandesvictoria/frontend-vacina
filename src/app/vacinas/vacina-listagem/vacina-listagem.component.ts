import { Component, OnInit } from '@angular/core';
import { VacinasService } from '../../shared/service/vacinas.service';
import { Vacina } from '../../shared/model/vacina';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss',
})
export class VacinaListagemComponent implements OnInit {
  public vacinas: Vacina[] = [];
  public seletor: VacinaSeletor = new VacinaSeletor();

  constructor(private VacinasService: VacinasService, private router: Router) {}

  ngOnInit(): void {
    this.consultarTodasVacinas();
  }

  private consultarTodasVacinas() {
    this.VacinasService.listarTodas().subscribe(
      (resultado) => {
        // retorno bem sucedido
        this.vacinas = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar vacinas', erro);
      }
    );
  }

  public limpar() {
    this.seletor = new VacinaSeletor();
  }

  public pesquisar() {
    this.VacinasService.listarComSeletor(this.seletor).subscribe(
      (resultado) => {
        this.vacinas = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar vacinas', erro);
      }
    );
  }

  public editar(idVacinaSelecionada: number): void {
    this.router.navigate(['/vacinas/detalhe/', idVacinaSelecionada]);
    //talves seja vacinaS ao invez de vacinA
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
        this.VacinasService.excluir(id).subscribe(
          (resultado) => {
            Swal.fire({
              title: 'Excluída!',
              text: 'A vacina foi excluída com sucesso!',
              icon: 'success',
            });
            this.consultarTodasVacinas();
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
