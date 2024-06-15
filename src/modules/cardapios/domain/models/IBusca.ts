import { ICardapio } from "./ICardapio";

export interface IBusca{
  per_page: number;
  total: number;
  current_page: number;
  data: ICardapio[];
}