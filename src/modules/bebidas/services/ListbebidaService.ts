import { inject, injectable } from "tsyringe";
import { IBebida } from "../domain/models/IBebida";
import { IBebidaRepository } from "../domain/repositories/IBebidaRepository";

@injectable()
class ListBebidaService {
  constructor(
    @inject('BebidaRepository')
    private bebidaRepository: IBebidaRepository,
  ){}

  public async execute(): Promise<IBebida[]> {
    const bebidas = this.bebidaRepository.findAll();
    return bebidas;
  }
}

export default ListBebidaService;
