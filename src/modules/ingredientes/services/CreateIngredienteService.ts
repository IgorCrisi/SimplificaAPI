import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IIngredienteRepository } from "../domain/repositories/IIngredienteRepository";
import { ICreateIngrediente } from "../domain/models/ICreateIngrediente";
import { IIngrediente } from "../domain/models/IIngrediente";

@injectable()
class CreateIngredienteService {
    constructor(
      @inject('IngredienteRepository')
      private ingredienteRepository: IIngredienteRepository,
  ){}


  public async execute({    
    nome,
  }: ICreateIngrediente): Promise<IIngrediente> {

    const ingredienteExists = await this.ingredienteRepository.findByNome(nome);

    if(ingredienteExists != null){
      if(ingredienteExists[0]){
        throw new AppError('Este ingrediente já foi cadastrado');
      }
    }

    const ingrediente = this.ingredienteRepository.create({
      nome,
    });
    return ingrediente;
  }
}

export default CreateIngredienteService;
