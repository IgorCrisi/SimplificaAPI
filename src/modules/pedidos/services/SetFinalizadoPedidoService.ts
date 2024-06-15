import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IPedidoRepository } from "../domain/repositories/IPedidoRepository";
import { IPedido } from "../domain/models/IPedido";
import { ISetFinalizadoPedido } from "../domain/models/ISetFinalizadoPedido";

@injectable()
class SetFinalizadoPedidoService {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: IPedidoRepository,
  ){}

public async execute({
  pedido_id, 
  finalizado,
}: ISetFinalizadoPedido): Promise<IPedido> {
    const pedido = await this.pedidoRepository.findById(pedido_id);
    if(!pedido){
      throw new AppError('Pedido não encontrado');
    }


    pedido.finalizado = finalizado;

    await this.pedidoRepository.save(pedido);
    return pedido;
  }
}

export default SetFinalizadoPedidoService;
