import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IIngredienteRepository } from "../domain/repositories/IIngredienteRepository";
import { IShowIngrediente } from "../domain/models/IShowIngrediente";
import { IIngrediente } from "../domain/models/IIngrediente";

@injectable()
class ShowIngredienteService {
  constructor(
    @inject('IngredienteRepository')
    private ingredienteRepository: IIngredienteRepository,
  ){}

  public async execute({ id }: IShowIngrediente): Promise<IIngrediente> {
    const ingrediente = await this.ingredienteRepository.findById(id);
    if(!ingrediente){
      throw new AppError('Ingrediente não encontrado');
    }
    return ingrediente;
  }
}

export default ShowIngredienteService;
