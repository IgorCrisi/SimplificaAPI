import { inject, injectable } from "tsyringe";
import { ITamanhoMarmita } from "../domain/models/ITamanhoMarmita";
import { ITamanhoMarmitaRepository } from "../domain/repositories/ITamanhoRepository";

@injectable()
class ListTamanhoService {
  constructor(
    @inject('TamanhoMarmitaRepository')
    private tamanhoMarmitaRepository: ITamanhoMarmitaRepository,
  ){}

  public async execute(): Promise<ITamanhoMarmita[]> {
    const tamanhos = this.tamanhoMarmitaRepository.findAll();
    return tamanhos;
  }
}

export default ListTamanhoService;
