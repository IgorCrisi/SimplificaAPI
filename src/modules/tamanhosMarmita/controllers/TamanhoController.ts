import { Request, Response } from "express";
import { instanceToInstance } from 'class-transformer';
import { container } from "tsyringe";
import Busca from "../services/BuscaTamanhoService";
import ListTamanhoService from "../services/ListTamanhoService";
import ListTamanhosByNomeService from "../services/ListTamanhosByNomeService";
import ShowTamanhoService from "../services/ShowTamanhoService";
import CreateTamanhoService from "../services/CreateTamanhoService";
import UpdateTamanhoService from "../services/UpdateTamanhoService";
import DeleteTamanhoService from "../services/DeleteTamanhoService";

export default class TamanhoController {
    
  public async busca(request: Request, response: Response): Promise<Response>{
      const page = request.query.page ? Number(request.query.page) : 1;
      const limit = request.query.limit ? Number(request.query.limit) : 15;
      const {
          nome,
      } = request.body;
      const busca = container.resolve(Busca)
      const tamanhos = await busca.execute({
          nome,
          page,
          limit
      });
      return response.json(instanceToInstance(tamanhos));
  }

  public async index(request: Request, response: Response): Promise<Response>{
    const listTamanhos = container.resolve(ListTamanhoService);
    const tamanhos = await listTamanhos.execute();
    return response.json(instanceToInstance(tamanhos));
  }

  public async listByNome(request: Request, response: Response): Promise<Response>{
    const {nome} = request.params;
    const listByNome = container.resolve(ListTamanhosByNomeService);
    const tamanhos = await listByNome.execute({nome});
    return response.json(instanceToInstance(tamanhos));
  }


  public async show(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const showTamanhos = container.resolve(ShowTamanhoService);
    const tamanho = await showTamanhos.execute({id});
    return response.json(instanceToInstance(tamanho));
  }

  public async create(request: Request, response: Response): Promise<Response>{
    const {    
        nome,
        valor
    } = request.body;
    const createtamanho = container.resolve(CreateTamanhoService);
    const tamanho = await createtamanho.execute({
        nome,
        valor
    });
    return response.json(instanceToInstance(tamanho));
  }

  public async update(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const {
        nome,
        valor
    } = request.body;
    const updateTamanho = container.resolve(UpdateTamanhoService);
    const tamanho = await updateTamanho.execute({
        tamanho_id: id,
        nome,
        valor
    });
    return response.json(instanceToInstance(tamanho));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const deleteTamanho = container.resolve(DeleteTamanhoService);
    await deleteTamanho.execute({id});
    return response.json([]);
  }

}
