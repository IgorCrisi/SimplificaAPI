import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICardapioRepository } from "../domain/repositories/ICardapioRepository";
import { IDeleteCardapio } from "../domain/models/IDeleteCardapio";

@injectable()
class DeleteCardapioService {
  constructor(
    @inject('CardapioRepository')
    private cardapioRepository: ICardapioRepository,
  ){}

  public async execute({id}: IDeleteCardapio): Promise<void> {
    const cardapio = await this.cardapioRepository.findById(id);

    if(!cardapio){
      throw new AppError("Cardápio não encontrado");
    }

    await this.cardapioRepository.remove(cardapio);
  }
}

export default DeleteCardapioService;