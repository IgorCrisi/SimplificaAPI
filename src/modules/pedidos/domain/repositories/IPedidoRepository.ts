import { IBusca } from "../models/IBusca";
import { ICreatePedido } from "../models/ICreatePedido";
import { IPedido } from "../models/IPedido";

export type SearchParams = {
    page: number;
    skip: number;
    take: number;
  };
  
  export type SearchParamsBusca = {
    nome: string;
    numero: string;
    finalizado: boolean;
    data: string;
    page: number;
    skip: number;
    take: number;
  };
  

export interface IPedidoRepository {
    findAll(): Promise<IPedido[]>;
    findByNumero(numero: number): Promise<IPedido[] | null>;
    findById(id: string): Promise<IPedido | null>;
    busca({nome, numero, finalizado, data, page, skip, take }: SearchParamsBusca): Promise<IBusca | null>;
    create(data: ICreatePedido): Promise<IPedido>;
    save(pedido: IPedido): Promise<IPedido>;
    remove(pedido: IPedido): Promise<void>;
}