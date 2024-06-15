import { dataSource } from "../../../../../shared/typeorm";
import { Equal, Repository } from "typeorm";
import { IBusca } from "../../../domain/models/IBusca";
import { IBebidaRepository, SearchParamsBusca } from "../../../domain/repositories/IBebidaRepository";
import Bebida from "../../Bebida";
import { IBebida } from "../../../domain/models/IBebida";
import { ICreateBebida } from "../../../domain/models/ICreateBebida";

class BebidaRepository implements IBebidaRepository {
  private ormRepository: Repository<Bebida>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Bebida);
  }

  public async busca(
    {
      nome,
      page, 
      skip, 
      take
  }: SearchParamsBusca): Promise<IBusca> {
    let query = this.ormRepository
    .createQueryBuilder('bebidas')
    .where(`LOWER(bebidas.nome) LIKE LOWER(:nome)`, { nome: `%${nome}%` })
    .orderBy('bebidas.nome', 'ASC')
    .skip(skip)
    .take(take);

    const [bebidas, count] = await query.getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: bebidas,
    };
  return result;
  }

  public async findAll(): Promise<IBebida[]> {
    const bebidas = await this.ormRepository.find();
    return bebidas;
  }

  public async create({
    nome,
    valor,
  }: ICreateBebida): Promise<IBebida> {
    const bebida = this.ormRepository.create({
      nome,
      valor
    });
    await this.ormRepository.save(bebida);
    return bebida;
  }

  public async save(bebida: IBebida): Promise<IBebida> {
    await this.ormRepository.save(bebida);
    return bebida;
  }

  public async remove(bebida: Bebida): Promise<void> {
    await this.ormRepository.remove(bebida);
  }

  public async findByNome(nome: string): Promise<Bebida[] | null> {
    const bebidas = await this.ormRepository.findBy({
      nome: Equal(nome)
    });

    return bebidas;
  }

  public async findById(id: string): Promise<Bebida | null> {
    const bebida = await this.ormRepository.findOneBy({
      id
    });

    return bebida;
  }


}

export default BebidaRepository;
