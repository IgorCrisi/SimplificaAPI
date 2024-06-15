import { inject, injectable } from "tsyringe";
import { IBusca } from "../domain/models/IBusca";
import { IIngredienteRepository } from "../domain/repositories/IIngredienteRepository";

interface SearchParams {
    nome: string;
    page: number;
    limit: number;
}

@injectable()
class Busca {
  constructor(
    @inject('IngredienteRepository')
    private ingredienteRepository: IIngredienteRepository,
  ){}

  public async execute(
    {
      nome,
      page,
      limit,
  }: SearchParams): Promise<IBusca | null> {
    const take = limit;
    const skip = (Number(page) - 1) * take;

    const ingredientes = this.ingredienteRepository.busca(
      {
        nome,
        page,
        skip,
        take
      });
    return ingredientes;
  }
}

export default Busca;