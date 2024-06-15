import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IPedidoRepository } from "../domain/repositories/IPedidoRepository";
import { IUpdatePedido } from "../domain/models/IUpatePedido";
import { IPedido } from "../domain/models/IPedido";

@injectable()
class UpdatePedidoService {
  constructor(
    @inject('PedidoRepository')
    private pedidoRepository: IPedidoRepository,
  ){}

public async execute({
  pedido_id, 
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
}: IUpdatePedido): Promise<IPedido> {
    const pedido = await this.pedidoRepository.findById(pedido_id);
    if(!pedido){
      throw new AppError('Pedido não encontrado');
    }

    pedido.tamanho = tamanho;
    pedido.ingredientes = ingredientes;
    pedido.bebidas = bebidas;
    pedido.nome = nome;
    pedido.telefone = telefone;
    pedido.endereco = endereco;
    pedido.credito = credito;
    pedido.debito = debito;
    pedido.dinheiro = dinheiro;
    pedido.pix = pix;
    pedido.finalizado = finalizado;
    pedido.troco = troco;
    pedido.total = total;

    await this.pedidoRepository.save(pedido);
    return pedido;
  }
}

export default UpdatePedidoService;
