import { inject, injectable } from "tsyringe";
import { IIngrediente } from "../domain/models/IIngrediente";
import { IIngredienteRepository } from "../domain/repositories/IIngredienteRepository";

@injectable()
class ListIngredienteService {
  constructor(
    @inject('IngredienteRepository')
    private ingredienteRepository: IIngredienteRepository,
  ){}

  public async execute(): Promise<IIngrediente[]> {
    const ingredientes = this.ingredienteRepository.findAll();
    return ingredientes;
  }
}

export default ListIngredienteService;
