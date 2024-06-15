import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICardapio } from "../domain/models/ICardapio";
import { ICreateCardapio } from "../domain/models/ICreateCardapio";
import { ICardapioRepository } from "../domain/repositories/ICardapioRepository";

@injectable()
class CreateCardapioService {
    constructor(
      @inject('CardapioRepository')
      private cardapioRepository: ICardapioRepository,
  ){}


  public async execute({    
    dia,
    ingredientes,
    bebidas
  }: ICreateCardapio): Promise<ICardapio> {

    const cardapioExists = await this.cardapioRepository.findByDia(dia);

    if(cardapioExists != null){
      if(cardapioExists[0]){
        throw new AppError('Já existe um cardápio para este dia');
      }
    }

    const cardapio = this.cardapioRepository.create({
      dia,
      ingredientes,
      bebidas
    });
    return cardapio;
  }
}

export default CreateCardapioService;
