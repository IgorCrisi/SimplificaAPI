import { Request, Response } from "express";
import { instanceToInstance } from 'class-transformer';
import { container } from "tsyringe";
import Busca from "../services/BuscaIngredienteService";
import ListIngredienteService from "../services/ListIngredienteService";
import ListIngredientesByNomeService from "../services/ListIngredienteByNomeService";
import ShowIngredienteService from "../services/ShowIngredienteService";
import CreateIngredienteService from "../services/CreateIngredienteService";
import UpdateIngredienteService from "../services/UpdateIngredienteService";
import DeleteIngredienteService from "../services/DeleteIngredienteService";

export default class IngredienteController {
    
  public async busca(request: Request, response: Response): Promise<Response>{
      const page = request.query.page ? Number(request.query.page) : 1;
      const limit = request.query.limit ? Number(request.query.limit) : 15;
      const {
          nome,
      } = request.body;
      const busca = container.resolve(Busca)
      const ingredientes = await busca.execute({
          nome,
          page,
          limit
      });
      return response.json(instanceToInstance(ingredientes));
  }

  public async index(request: Request, response: Response): Promise<Response>{
    const listIngredientes = container.resolve(ListIngredienteService);
    const ingredientes = await listIngredientes.execute();
    return response.json(instanceToInstance(ingredientes));
  }

  public async listByNome(request: Request, response: Response): Promise<Response>{
    const {nome} = request.params;
    const listByNome = container.resolve(ListIngredientesByNomeService);
    const ingredientes = await listByNome.execute({nome});
    return response.json(instanceToInstance(ingredientes));
  }


  public async show(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const showIngredientes = container.resolve(ShowIngredienteService);
    const ingrediente = await showIngredientes.execute({id});
    return response.json(instanceToInstance(ingrediente));
  }

  public async create(request: Request, response: Response): Promise<Response>{
    const {    
        nome,
    } = request.body;
    const createIngrediente = container.resolve(CreateIngredienteService);
    const ingrediente = await createIngrediente.execute({
        nome
    });
    return response.json(instanceToInstance(ingrediente));
  }

  public async update(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const {
        nome
    } = request.body;
    const updateIngrediente = container.resolve(UpdateIngredienteService);
    const ingrediente = await updateIngrediente.execute({
        ingrediente_id: id,
        nome
    });
    return response.json(instanceToInstance(ingrediente));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const deleteIngrediente = container.resolve(DeleteIngredienteService);
    await deleteIngrediente.execute({id});
    return response.json([]);
  }

}
