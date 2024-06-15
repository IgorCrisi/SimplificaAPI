import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IIngredienteRepository } from "../domain/repositories/IIngredienteRepository";
import { IDeleteIngrediente } from "../domain/models/IDeleteIngrediente";

@injectable()
class DeleteIngredienteService {
  constructor(
    @inject('IngredienteRepository')
    private ingredienteRepository: IIngredienteRepository,
  ){}

  public async execute({id}: IDeleteIngrediente): Promise<void> {
    const ingrediente = await this.ingredienteRepository.findById(id);

    if(!ingrediente){
      throw new AppError("Ingrediente não encontrado");
    }

    await this.ingredienteRepository.remove(ingrediente);
  }
}

export default DeleteIngredienteService;