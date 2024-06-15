import { inject, injectable } from "tsyringe";
import { IBusca } from "../domain/models/IBusca";
import { IPedidoRepository } from "../domain/repositories/IPedidoRepository";

interface SearchParams {
    nome: string;
    numero: string;
    finalizado: boolean;
    data: string;
    page: number;
    limit: number;
}

@injectable()
class Busca {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: IPedidoRepository,
  ){}

  public async execute(
    {
      nome,
      numero,
      finalizado,
      data,
      page,
      limit,
  }: SearchParams): Promise<IBusca | null> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const pedidos = this.pedidoRepository.busca(
      {
        nome,
        numero,
        finalizado,
        data,
        page,
        skip,
        take
      });
    return pedidos;
  }
}

export default Busca;