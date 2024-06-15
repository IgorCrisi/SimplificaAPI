import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ITamanhoMarmitaRepository } from "../domain/repositories/ITamanhoRepository";
import { IDeleteTamanhoMarmita } from "../domain/models/IDeleteTamanhoMarmita";

@injectable()
class DeleteTamanhoService {
  constructor(
    @inject('TamanhoMarmitaRepository')
    private tamanhoMarmitaRepository: ITamanhoMarmitaRepository,
  ){}

  public async execute({id}: IDeleteTamanhoMarmita): Promise<void> {
    const tamanho = await this.tamanhoMarmitaRepository.findById(id);

    if(!tamanho){
      throw new AppError("Tamanho de marmita não encontrado");
    }

    await this.tamanhoMarmitaRepository.remove(tamanho);
  }
}

export default DeleteTamanhoService;