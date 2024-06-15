import { inject, injectable } from "tsyringe";
import { getCustomRepository } from "typeorm";
import { IPedidoRepository } from "../domain/repositories/IPedidoRepository";
import { IListPedidoByNumero } from "../domain/models/ILIstPedidoByNumero";
import Pedido from "../typeorm/Pedido";
import { IPedido } from "../domain/models/IPedido";

@injectable()
class ListPedidoByNumeroService {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: IPedidoRepository,
  ){}

  public async execute({numero}: IListPedidoByNumero): Promise<IPedido[] | null> {
    const pedidos = this.pedidoRepository.findByNumero(numero);
    return pedidos;
  }
}

export default ListPedidoByNumeroService;
