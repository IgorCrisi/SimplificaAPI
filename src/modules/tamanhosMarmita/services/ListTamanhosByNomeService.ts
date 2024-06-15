import { inject, injectable } from "tsyringe";
import { IListByNome } from "../domain/models/ILIstByNome";
import { ITamanhoMarmita } from "../domain/models/ITamanhoMarmita";
import { ITamanhoMarmitaRepository } from "../domain/repositories/ITamanhoRepository";

@injectable()
class ListTamanhosByNomeService {
  constructor(
    @inject('TamanhoMarmitaRepository')
    private tamanhoMarmitaRepository: ITamanhoMarmitaRepository,
  ){}

  public async execute({nome}: IListByNome): Promise<ITamanhoMarmita[] | null> {
    const tamanhos = this.tamanhoMarmitaRepository.findByNome(nome);
    return tamanhos;
  }
}

export default ListTamanhosByNomeService;
