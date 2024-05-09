import { Pessoa } from "./pessoa";
import { Vacina } from "./vacina";

// TEM QUE SER NOMES IGUAIS DO BACKEND
export class Vacinacao {
  id: number;
  pessoa: Pessoa;
  vacina: Vacina;
  data: Date;
  avaliacao: number;
}
