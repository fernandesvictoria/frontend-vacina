import { Component, OnInit } from '@angular/core';
import { VacinasService } from '../../shared/service/vacinas.service';
import { error } from 'console';
import { Vacina } from '../../shared/model/vacina';
import { VacinaSeletor } from '../../shared/model/seletor/vacina.seletor';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrl: './vacina-listagem.component.scss',
})
export class VacinaListagemComponent implements OnInit {



  public vacinas: Vacina[] = [];
  public seletor: VacinaSeletor = new VacinaSeletor();

  constructor(private VacinasService: VacinasService) {}

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

  public pesquisar(){
    this.VacinasService.listarComSeletor(this.seletor).subscribe(
      resultado =>{
        this.vacinas = resultado;
      },
      erro =>{
        console.error('Erro ao consultar vacinas',erro)
      }
    )
  }
}
