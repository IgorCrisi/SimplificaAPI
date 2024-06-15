import { IBebida } from "./IBebida";

export interface IBusca{
  per_page: number;
  total: number;
  current_page: number;
  data: IBebida[];
}