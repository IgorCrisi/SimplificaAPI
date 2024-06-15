import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICardapioRepository } from "../domain/repositories/ICardapioRepository";
import { IShowCardapio } from "../domain/models/IShowCardapio";
import { ICardapio } from "../domain/models/ICardapio";

@injectable()
class ShowCardapioService {
  constructor(
    @inject('CardapioRepository')
    private cardapioRepository: ICardapioRepository,
  ){}

  public async execute({ id }: IShowCardapio): Promise<ICardapio> {
    const cardapio = await this.cardapioRepository.findById(id);
    if(!cardapio){
      throw new AppError('Cardápio não encontrado');
    }
    return cardapio;
  }
}

export default ShowCardapioService;
