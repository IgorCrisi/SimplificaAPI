import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IBebida } from "../domain/models/IBebida";
import { ICreateBebida } from "../domain/models/ICreateBebida";
import { IBebidaRepository } from "../domain/repositories/IBebidaRepository";

@injectable()
class CreateBebidaService {
    constructor(
      @inject('BebidaRepository')
      private bebidaRepository: IBebidaRepository,
  ){}


  public async execute({    
    nome,
    valor
  }: ICreateBebida): Promise<IBebida> {

    const bebidaExists = await this.bebidaRepository.findByNome(nome);

    if(bebidaExists != null){
      if(bebidaExists[0]){
        throw new AppError('Esta bebida já foi cadastrada');
      }
    }

    const bebida = this.bebidaRepository.create({
      nome,
      valor
    });
    return bebida;
  }
} 

export default CreateBebidaService;
