import { dataSource } from "../../../../../shared/typeorm";
import { Equal, Repository } from "typeorm";
import { IBusca } from "../../../domain/models/IBusca";
import { ICardapioRepository, SearchParamsBusca } from "../../../domain/repositories/ICardapioRepository";
import Cardapio from "../../Cardapio";
import { ICardapio } from "@modules/cardapios/domain/models/ICardapio";
import { ICreateCardapio } from "@modules/cardapios/domain/models/ICreateCardapio";

class CardapioRepository implements ICardapioRepository {
  private ormRepository: Repository<Cardapio>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Cardapio);
  }

  public async busca(
    {
      dia,
      page, 
      skip, 
      take
  }: SearchParamsBusca): Promise<IBusca> {
    let query = this.ormRepository
    .createQueryBuilder('cardapios')
    .where(`LOWER(cardapios.dia) LIKE LOWER(:dia)`, { dia: `%${dia}%` })
    .skip(skip)
    .take(take);

    const [cardapios, count] = await query.getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: cardapios,
    };
  return result;
  }

  public async findAll(): Promise<ICardapio[]> {
    const cardapios = await this.ormRepository.find();
    return cardapios;
  }

  public async create({
    dia,
    ingredientes,
    bebidas
  }: ICreateCardapio): Promise<ICardapio> {
    const cardapio = this.ormRepository.create({
      dia,
      ingredientes,
      bebidas
    });
    await this.ormRepository.save(cardapio);
    return cardapio;
  }

  public async save(cardapio: ICardapio): Promise<ICardapio> {
    await this.ormRepository.save(cardapio);
    return cardapio;
  }

  public async remove(cardapio: Cardapio): Promise<void> {
    await this.ormRepository.remove(cardapio);
  }

  public async findByDia(dia: string): Promise<Cardapio[] | null> {
    const cardapios = await this.ormRepository.findBy({
      dia: Equal(dia)
    });

    return cardapios;
  }

  public async findById(id: string): Promise<Cardapio | null> {
    const cardapio = await this.ormRepository.findOneBy({
      id
    });

    return cardapio;
  }


}

export default CardapioRepository;
