import { inject, injectable } from "tsyringe";
import { ICardapio } from "../domain/models/ICardapio";
import { IListByDia } from "../domain/models/ILIstByDia";
import { ICardapioRepository } from "../domain/repositories/ICardapioRepository";

@injectable()
class ListCardapioByDiaService {
  constructor(
    @inject('CardapioRepository')
    private cardapioRepository: ICardapioRepository,
  ){}

  public async execute({dia}: IListByDia): Promise<ICardapio[] | null> {
    const cardapios = this.cardapioRepository.findByDia(dia);
    return cardapios;
  }
}

export default ListCardapioByDiaService;
