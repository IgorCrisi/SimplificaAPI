import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IIngredienteRepository } from "../domain/repositories/IIngredienteRepository";
import { IUpdateIngrediente } from "../domain/models/IUpateIngrediente";
import { IIngrediente } from "../domain/models/IIngrediente";

@injectable()
class UpdateIngredienteService {
  constructor(
    @inject('IngredienteRepository')
    private ingredienteRepository: IIngredienteRepository,
  ){}

public async execute({
  ingrediente_id, 
  nome
}: IUpdateIngrediente): Promise<IIngrediente> {
    const ingrediente = await this.ingredienteRepository.findById(ingrediente_id);
    if(!ingrediente){
      throw new AppError('Ingrediente não encontrado');
    }

    const ingredienteExists = await this.ingredienteRepository.findByNome(nome);
    if (ingredienteExists != null && ingredienteExists.length > 0) {
      if(ingredienteExists[0].id != ingrediente_id){
        throw new AppError('O nome deste ingrediente não está disponível');
      }
    }

    ingrediente.nome = nome;

    await this.ingredienteRepository.save(ingrediente);
    return ingrediente;
  }
}

export default UpdateIngredienteService;
