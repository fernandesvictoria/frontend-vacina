import { Pais } from "./pais";
import { Pessoa } from "./pessoa";

// TEM QUE SER NOMES IGUAIS DO BACKEND
export class Vacina {
  id: number;
  nome: string;
  pais: Pais;
  pesquisadorResponsavel: Pessoa;
  estagio: string;
  dataInicioPesquisa: Date;
  media: number;
}
