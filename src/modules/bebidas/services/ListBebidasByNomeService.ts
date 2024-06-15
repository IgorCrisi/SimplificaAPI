import { inject, injectable } from "tsyringe";
import { IBebida } from "../domain/models/IBebida";
import { IListByNome } from "../domain/models/ILIstByNome";
import { IBebidaRepository } from "../domain/repositories/IBebidaRepository";

@injectable()
class ListBebidasByNomeService {
  constructor(
    @inject('BebidaRepository')
    private bebidaRepository: IBebidaRepository,
  ){}

  public async execute({nome}: IListByNome): Promise<IBebida[] | null> {
    const bebidas = this.bebidaRepository.findByNome(nome);
    return bebidas;
  }
}

export default ListBebidasByNomeService;
