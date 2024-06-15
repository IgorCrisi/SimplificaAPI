import { IBebida } from "../models/IBebida";
import { IBusca } from "../models/IBusca";
import { ICreateBebida } from "../models/ICreateBebida";

export type SearchParams = {
    page: number;
    skip: number;
    take: number;
  };
  
  export type SearchParamsBusca = {
    nome: string;
    page: number;
    skip: number;
    take: number;
  };
  

export interface IBebidaRepository {
    findAll(): Promise<IBebida[]>;
    findByNome(nome: string): Promise<IBebida[] | null>;
    findById(id: string): Promise<IBebida | null>;
    busca({nome, page, skip, take }: SearchParamsBusca): Promise<IBusca | null>;
    create(data: ICreateBebida): Promise<IBebida>;
    save(bebida: IBebida): Promise<IBebida>;
    remove(bebida: IBebida): Promise<void>;
}