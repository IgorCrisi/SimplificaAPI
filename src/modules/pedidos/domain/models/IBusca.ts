import { IPedido } from "./IPedido";

export interface IBusca{
  per_page: number;
  total: number;
  current_page: number;
  data: IPedido[];
}