import { Request, Response } from "express";
import { instanceToInstance } from 'class-transformer';
import { container } from "tsyringe";
import ListPedidoService from "../services/ListPedidoService";
import ListPedidoByNumeroService from "../services/ListPedidoByNumeroService";
import ShowPedidoService from "../services/ShowPedidoService";
import CreatePedidoService from "../services/CreatePedidoService";
import UpdatePedidoService from "../services/UpdatePedidoService";
import DeletePedidoService from "../services/DeletePedidoService";
import Busca from "../services/BuscaPedidoService";
import SetFinalizadoPedidoService from "../services/SetFinalizadoPedidoService";

export default class PedidoController {
    
  public async busca(request: Request, response: Response): Promise<Response>{
      const page = request.query.page ? Number(request.query.page) : 1;
      const limit = request.query.limit ? Number(request.query.limit) : 15;
      const {
          nome, 
          numero, 
          finalizado, 
          data
      } = request.body;
      const busca = container.resolve(Busca)
      const pedidos = await busca.execute({
          nome, 
          numero, 
          finalizado, 
          data,
          page,
          limit
      });
      return response.json(instanceToInstance(pedidos));
  }

  public async index(request: Request, response: Response): Promise<Response>{
    const listPedido = container.resolve(ListPedidoService);
    const pedidos = await listPedido.execute();
    return response.json(instanceToInstance(pedidos));
  }

  public async listByNumero(request: Request, response: Response): Promise<Response>{
    const {numero} = request.params;
    var numeroPedido = parseInt(numero);
    const listByNumero = container.resolve(ListPedidoByNumeroService);
    const pedidos = await listByNumero.execute({numero: numeroPedido});
    return response.json(instanceToInstance(pedidos));
  }


  public async show(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const showPedidos = container.resolve(ShowPedidoService);
    const pedido = await showPedidos.execute({id});
    return response.json(instanceToInstance(pedido));
  }

  public async create(request: Request, response: Response): Promise<Response>{
    const {    
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
    } = request.body;
    const createPedido = container.resolve(CreatePedidoService);
    const pedido = await createPedido.execute({
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
    return response.json(instanceToInstance(pedido));
  }

  public async update(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const {
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
    } = request.body;
    const updatePedido = container.resolve(UpdatePedidoService);
    const pedido = await updatePedido.execute({
        pedido_id: id,
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
    return response.json(instanceToInstance(pedido));
  }

  public async setFinalizado(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const {
        finalizado,
    } = request.body;
    const setFinalizadoPedido = container.resolve(SetFinalizadoPedidoService);
    const pedido = await setFinalizadoPedido.execute({
        pedido_id: id,
        finalizado,
    });
    return response.json(instanceToInstance(pedido));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const deletePedido = container.resolve(DeletePedidoService);
    await deletePedido.execute({id});
    return response.json([]);
  }

}
