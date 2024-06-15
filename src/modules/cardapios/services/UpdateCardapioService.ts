import AppError from "../../../shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { ICardapioRepository } from "../domain/repositories/ICardapioRepository";
import { IUpdateCardapio } from "../domain/models/IUpdateCardapio";
import { ICardapio } from "../domain/models/ICardapio";

@injectable()
class UpdateCardapioService {
  constructor(
    @inject('CardapioRepository')
    private cardapioRepository: ICardapioRepository,
  ){}

public async execute({
  cardapio_id, 
  dia,
  ingredientes,
  bebidas
}: IUpdateCardapio): Promise<ICardapio> {
    const cardapio = await this.cardapioRepository.findById(cardapio_id);
    if(!cardapio){
      throw new AppError('Cardápio não encontrado');
    }

    const cardapioExists = await this.cardapioRepository.findByDia(dia);
    if (cardapioExists != null && cardapioExists.length > 0) {
      if(cardapioExists[0].id != cardapio_id){
        throw new AppError('O dia deste cardápio não esta disponível');
      }
    }

    cardapio.dia = dia;
    cardapio.ingredientes = ingredientes;
    cardapio.bebidas = bebidas;

    await this.cardapioRepository.save(cardapio);
    return cardapio;
  }
}

export default UpdateCardapioService;
