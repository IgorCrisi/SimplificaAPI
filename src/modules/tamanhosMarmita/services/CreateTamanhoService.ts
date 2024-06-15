import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICreateTamanhoMarmita } from "../domain/models/ICreateTamanhoMarmita";
import { ITamanhoMarmita } from "../domain/models/ITamanhoMarmita";
import { ITamanhoMarmitaRepository } from "../domain/repositories/ITamanhoRepository";

@injectable()
class CreateTamanhoService {
    constructor(
      @inject('TamanhoMarmitaRepository')
      private tamanhoMarmitaRepository: ITamanhoMarmitaRepository,
  ){}


  public async execute({    
    nome,
    valor
  }: ICreateTamanhoMarmita): Promise<ITamanhoMarmita> {

    const tamanhoExists = await this.tamanhoMarmitaRepository.findByNome(nome);

    if(tamanhoExists != null){
      if(tamanhoExists[0]){
        throw new AppError('Este tamanho de marmita já foi cadastrado');
      }
    }

    const tamanho = this.tamanhoMarmitaRepository.create({
      nome,
      valor
    });
    return tamanho;
  }
}

export default CreateTamanhoService;
