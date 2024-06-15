import { inject, injectable } from "tsyringe";
import { ICardapio } from "../domain/models/ICardapio";
import { ICardapioRepository } from "../domain/repositories/ICardapioRepository";

@injectable()
class ListCardapioService {
  constructor(
    @inject('CardapioRepository')
    private cardapioRepository: ICardapioRepository,
  ){}

  public async execute(): Promise<ICardapio[]> {
    const cardapios = this.cardapioRepository.findAll();
    return cardapios;
  }
}

export default ListCardapioService;
