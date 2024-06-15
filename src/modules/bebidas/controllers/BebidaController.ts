import { Request, Response } from "express";
import { instanceToInstance } from 'class-transformer';
import { container } from "tsyringe";
import Busca from "../services/BuscaBebidaService";
import ListBebidaService from "../services/ListbebidaService";
import ListBebidasByNomeService from "../services/ListBebidasByNomeService";
import ShowBebidaService from "../services/ShowBebidaService";
import CreateBebidaService from "../services/CreateBebidaService";
import UpdateBebidaService from "../services/UpdateBebidaService";
import DeleteBebidaService from "../services/DeleteBebidaService";

export default class BebidaController {
    
  public async busca(request: Request, response: Response): Promise<Response>{
      const page = request.query.page ? Number(request.query.page) : 1;
      const limit = request.query.limit ? Number(request.query.limit) : 15;
      const {
          nome,
      } = request.body;
      const busca = container.resolve(Busca)
      const bebidas = await busca.execute({
          nome,
          page,
          limit
      });
      return response.json(instanceToInstance(bebidas));
  }

  public async index(request: Request, response: Response): Promise<Response>{
    const listBebidas = container.resolve(ListBebidaService);
    const bebidas = await listBebidas.execute();
    return response.json(instanceToInstance(bebidas));
  }

  public async listByNome(request: Request, response: Response): Promise<Response>{
    const {nome} = request.params;
    const listByNome = container.resolve(ListBebidasByNomeService);
    const bebidas = await listByNome.execute({nome});
    return response.json(instanceToInstance(bebidas));
  }


  public async show(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const showBebidas = container.resolve(ShowBebidaService);
    const bebida = await showBebidas.execute({id});
    return response.json(instanceToInstance(bebida));
  }

  public async create(request: Request, response: Response): Promise<Response>{
    const {    
        nome,
        valor
    } = request.body;
    const createbebida = container.resolve(CreateBebidaService);
    const bebida = await createbebida.execute({
        nome,
        valor
    });
    return response.json(instanceToInstance(bebida));
  }

  public async update(request: Request, response: Response): Promise<Response>{
    const {id} = request.params;
    const {
        nome,
        valor
    } = request.body;
    const updateBebida = container.resolve(UpdateBebidaService);
    const bebida = await updateBebida.execute({
        bebida_id: id,
        nome,
        valor
    });
    return response.json(instanceToInstance(bebida));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    const deleteBebida = container.resolve(DeleteBebidaService);
    await deleteBebida.execute({id});
    return response.json([]);
  }

}
