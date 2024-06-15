import { IBusca } from "../models/IBusca";
import { ICardapio } from "../models/ICardapio";
import { ICreateCardapio } from "../models/ICreateCardapio";

export type SearchParams = {
    page: number;
    skip: number;
    take: number;
  };
  
  export type SearchParamsBusca = {
    dia: string;
    page: number;
    skip: number;
    take: number;
  };
  

export interface ICardapioRepository {
    findAll(): Promise<ICardapio[]>;
    findByDia(dia: string): Promise<ICardapio[] | null>;
    findById(id: string): Promise<ICardapio | null>;
    busca({dia, page, skip, take }: SearchParamsBusca): Promise<IBusca | null>;
    create(data: ICreateCardapio): Promise<ICardapio>;
    save(cardapio: ICardapio): Promise<ICardapio>;
    remove(cardapio: ICardapio): Promise<void>;
}