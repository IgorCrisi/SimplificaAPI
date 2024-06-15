import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IBebidaRepository } from "../domain/repositories/IBebidaRepository";
import { IDeleteBebida } from "../domain/models/IDeleteBebida";

@injectable()
class DeleteBebidaService {
  constructor(
    @inject('BebidaRepository')
    private bebidaRepository: IBebidaRepository,
  ){}

  public async execute({id}: IDeleteBebida): Promise<void> {
    const bebida = await this.bebidaRepository.findById(id);

    if(!bebida){
      throw new AppError("Bebida não encontrada");
    }

    await this.bebidaRepository.remove(bebida);
  }
}

export default DeleteBebidaService;