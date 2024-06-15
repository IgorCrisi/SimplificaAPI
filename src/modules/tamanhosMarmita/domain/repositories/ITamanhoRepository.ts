import { IBusca } from "../models/IBusca";
import { ICreateTamanhoMarmita } from "../models/ICreateTamanhoMarmita";
import { ITamanhoMarmita } from "../models/ITamanhoMarmita";

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
  

export interface ITamanhoMarmitaRepository {
    findAll(): Promise<ITamanhoMarmita[]>;
    findByNome(nome: string): Promise<ITamanhoMarmita[] | null>;
    findById(id: string): Promise<ITamanhoMarmita | null>;
    busca({nome, page, skip, take }: SearchParamsBusca): Promise<IBusca | null>;
    create(data: ICreateTamanhoMarmita): Promise<ITamanhoMarmita>;
    save(tamanho: ITamanhoMarmita): Promise<ITamanhoMarmita>;
    remove(tamanho: ITamanhoMarmita): Promise<void>;
}