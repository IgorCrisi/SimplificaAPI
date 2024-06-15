import { IIngrediente } from "./IIngrediente";

export interface IBusca{
  per_page: number;
  total: number;
  current_page: number;
  data: IIngrediente[];
}