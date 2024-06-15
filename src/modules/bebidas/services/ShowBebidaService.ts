import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IBebidaRepository } from "../domain/repositories/IBebidaRepository";
import { IShowBebida } from "../domain/models/IShowBebida";
import { IBebida } from "../domain/models/IBebida";

@injectable()
class ShowBebidaService {
  constructor(
    @inject('BebidaRepository')
    private bebidaRepository: IBebidaRepository,
  ){}

  public async execute({ id }: IShowBebida): Promise<IBebida> {
    const bebida = await this.bebidaRepository.findById(id);
    if(!bebida){
      throw new AppError('Bebida não encontrada');
    }
    return bebida;
  }
}

export default ShowBebidaService;
