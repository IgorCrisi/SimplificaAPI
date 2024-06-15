import { Request, Response } from "express";
import { instanceToInstance } from 'class-transformer';
import { container } from "tsyringe";
import Busca from "../services/BuscaCardapioService";
import ListCardapioService from "../services/ListCardapioService";
import ListCardapioByDiaService from "../services/ListCardapiosByDiaService";
import ShowCardapioService from "../services/ShowCardapioService";
import CreateCardapioService from "../services/CreateCardapioService";
import UpdateCardapioService from "../services/UpdateCardapioService";
import DeleteCardapioService from "../services/DeleteCardapioService";

export default class CardapioController {
    
  public async busca(request: Request, response: Response): Promise<Response>{
      const page = request.query.page ? Number(request.query.page) : 1;
      const limit = request.query.limit ? Number(request.query.limit) : 15;
      const {
          dia,
      } = request.body;
      const busca = container.resolve(Busca)
      const cardapios = await busca.execute({
          dia,
          page,
          limit
      });
      return response.json(instanceToInstance(cardapios));
  }

  public async index(request: Request, response: Response): Promise<Response>{
    const listCardapios = container.resolve(ListCardapioService);
    const cardapios = await listCardapios.execute();
    return response.json(instanceToInstance(cardapios));
  }

  public async listByDia(request: Request, response: Response): Promise<Response>{
    const {dia} = request.params;
    const listByDia = container.resolve(ListCardapioByDiaService);
    const cardapios = await listByDia.execute({dia});
    return response.json(instanceToInstance(cardapios));
  }


  public async show(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const showCardapio = container.resolve(ShowCardapioService);
    const cardapio = await showCardapio.execute({id});
    return response.json(instanceToInstance(cardapio));
  }

  public async create(request: Request, response: Response): Promise<Response>{
    const {    
        dia,
        ingredientes,
        bebidas
    } = request.body;
    const createcardapio = container.resolve(CreateCardapioService);
    const cardapio = await createcardapio.execute({
      dia,
      ingredientes,
      bebidas
    });
    return response.json(instanceToInstance(cardapio));
  }

  public async update(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const {
        dia,
        ingredientes,
        bebidas
    } = request.body;
    const updateCardapio = container.resolve(UpdateCardapioService);
    const cardapio = await updateCardapio.execute({
        cardapio_id: id,
        dia,
        ingredientes,
        bebidas
    });
    return response.json(instanceToInstance(cardapio));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const deleteCardapio = container.resolve(DeleteCardapioService);
    await deleteCardapio.execute({id});
    return response.json([]);
  }

}
