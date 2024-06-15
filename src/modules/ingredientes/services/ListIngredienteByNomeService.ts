import { inject, injectable } from "tsyringe";
import { IIngrediente } from "../domain/models/IIngrediente";
import { IListByNome } from "../domain/models/ILIstByNome";
import { IIngredienteRepository } from "../domain/repositories/IIngredienteRepository";

@injectable()
class ListIngredientesByNomeService {
  constructor(
    @inject('IngredienteRepository')
    private ingredienteRepository: IIngredienteRepository,
  ){}

  public async execute({nome}: IListByNome): Promise<IIngrediente[] | null> {
    const ingredientes = this.ingredienteRepository.findByNome(nome);
    return ingredientes;
  }
}

export default ListIngredientesByNomeService;
