import { IBusca } from "../models/IBusca";
import { ICreateIngrediente } from "../models/ICreateIngrediente";
import { IIngrediente } from "../models/IIngrediente";

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
  

export interface IIngredienteRepository {
    findAll(): Promise<IIngrediente[]>;
    findByNome(nome: string): Promise<IIngrediente[] | null>;
    findById(id: string): Promise<IIngrediente | null>;
    busca({nome, page, skip, take }: SearchParamsBusca): Promise<IBusca | null>;
    create(data: ICreateIngrediente): Promise<IIngrediente>;
    save(ingrediente: IIngrediente): Promise<IIngrediente>;
    remove(ingrediente: IIngrediente): Promise<void>;
}