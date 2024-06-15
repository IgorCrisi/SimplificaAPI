import { ITamanhoMarmita } from "./ITamanhoMarmita";

export interface IBusca{
  per_page: number;
  total: number;
  current_page: number;
  data: ITamanhoMarmita[];
}