import { inject, injectable } from "tsyringe";
import { IPedidoRepository } from "../domain/repositories/IPedidoRepository";
import Pedido from "../typeorm/Pedido";
import { IPedido } from "../domain/models/IPedido";

@injectable()
class ListPedidoService {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: IPedidoRepository,
  ){}

  public async execute(): Promise<IPedido[]> {
    const pedidos = this.pedidoRepository.findAll();
    return pedidos;
  }
}

export default ListPedidoService;
