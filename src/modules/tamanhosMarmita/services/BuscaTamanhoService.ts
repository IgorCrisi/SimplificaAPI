import { inject, injectable } from "tsyringe";
import { IBusca } from "../domain/models/IBusca";
import { ITamanhoMarmitaRepository } from "../domain/repositories/ITamanhoRepository";

interface SearchParams {
    nome: string;
    page: number;
    limit: number;
}

@injectable()
class Busca {
  constructor(
    @inject('TamanhoMarmitaRepository')
    private tamanhoMarmitaRepository: ITamanhoMarmitaRepository,
  ){}

  public async execute(
    {
      nome,
      page,
      limit,
  }: SearchParams): Promise<IBusca | null> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const tamanhos = this.tamanhoMarmitaRepository.busca(
      {
        nome,
        page,
        skip,
        take
      });
    return tamanhos;
  }
}

export default Busca;