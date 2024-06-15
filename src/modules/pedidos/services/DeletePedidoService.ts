import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IPedidoRepository } from "../domain/repositories/IPedidoRepository";
import { IDeletePedido } from "../domain/models/IDeletePedido";

@injectable()
class DeletePedidoService {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: IPedidoRepository,
  ){}

  public async execute({id}: IDeletePedido): Promise<void> {
    const pedido = await this.pedidoRepository.findById(id);

    if(!pedido){
      throw new AppError("Pedido não encontrado");
    }

    await this.pedidoRepository.remove(pedido);
  }
}

export default DeletePedidoService;