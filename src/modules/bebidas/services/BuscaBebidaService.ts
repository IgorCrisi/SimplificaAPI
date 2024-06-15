import { inject, injectable } from "tsyringe";
import { IBusca } from "../domain/models/IBusca";
import { IBebidaRepository } from "../domain/repositories/IBebidaRepository";

interface SearchParams {
    nome: string;
    page: number;
    limit: number;
}

@injectable()
class Busca {
  constructor(
    @inject('BebidaRepository')
    private bebidaRepository: IBebidaRepository,
  ){}

  public async execute(
    {
      nome,
      page,
      limit,
  }: SearchParams): Promise<IBusca | null> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const bebidas = this.bebidaRepository.busca(
      {
        nome,
        page,
        skip,
        take
      });
    return bebidas;
  }
}

export default Busca;