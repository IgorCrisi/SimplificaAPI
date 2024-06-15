import { inject, injectable } from "tsyringe";
import { IPedidoRepository } from "../domain/repositories/IPedidoRepository";
import { ICreatePedido } from "../domain/models/ICreatePedido";
import { IPedido } from "../domain/models/IPedido";

@injectable()
class CreatePedidoService {
    constructor(
    @inject('PedidoRepository')
    private pedidoRepository: IPedidoRepository,
  ){}


  public async execute({    
    tamanho,
    ingredientes,
    bebidas,
    nome,
    telefone,
    endereco,
    credito,
    debito,
    dinheiro,
    pix,
    finalizado,
    troco,
    total
  }: ICreatePedido): Promise<IPedido> {

    const pedido = this.pedidoRepository.create({
      tamanho,
      ingredientes,
      bebidas,
      nome,
      telefone,
      endereco,
      credito,
      debito,
      dinheiro,
      pix,
      finalizado,
      troco,
      total
    });
    return pedido;
  }
}

export default CreatePedidoService;
