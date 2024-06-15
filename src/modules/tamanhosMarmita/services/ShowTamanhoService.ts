import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ITamanhoMarmitaRepository } from "../domain/repositories/ITamanhoRepository";
import { IShowTamanhoMarmita } from "../domain/models/IShowTamanhoMarmita";
import { ITamanhoMarmita } from "../domain/models/ITamanhoMarmita";

@injectable()
class ShowTamanhoService {
  constructor(
    @inject('TamanhoMarmitaRepository')
    private tamanhoMarmitaRepository: ITamanhoMarmitaRepository,
  ){}

  public async execute({ id }: IShowTamanhoMarmita): Promise<ITamanhoMarmita> {
    const tamanho = await this.tamanhoMarmitaRepository.findById(id);
    if(!tamanho){
      throw new AppError('Tamanho de marmita não encontrado');
    }
    return tamanho;
  }
}

export default ShowTamanhoService;
