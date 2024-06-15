import { inject, injectable } from "tsyringe";
import { IBusca } from "../domain/models/IBusca";
import { ICardapioRepository } from "../domain/repositories/ICardapioRepository";

interface SearchParams {
    dia: string;
    page: number;
    limit: number;
}

@injectable()
class Busca {
  constructor(
    @inject('CardapioRepository')
    private cardapioRepository: ICardapioRepository,
  ){}

  public async execute(
    {
      dia,
      page,
      limit,
  }: SearchParams): Promise<IBusca | null> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const cardapios = this.cardapioRepository.busca(
      {
        dia,
        page,
        skip,
        take
      });
    return cardapios;
  }
}

export default Busca;