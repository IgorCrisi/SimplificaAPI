import AppError from "../../../shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import { inject, injectable } from "tsyringe";
import { IPedidoRepository } from "../domain/repositories/IPedidoRepository";
import { IShowPedido } from "../domain/models/IShowPedido";
import Pedido from "../typeorm/Pedido";
import { IPedido } from "../domain/models/IPedido";

@injectable()
class ShowPedidoService {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: IPedidoRepository,
  ){}

  public async execute({ id }: IShowPedido): Promise<IPedido> {
    const pedido = await this.pedidoRepository.findById(id);
    if(!pedido){
      throw new AppError('Pedido não encontrado');
    }
    return pedido;
  }
}

export default ShowPedidoService;
