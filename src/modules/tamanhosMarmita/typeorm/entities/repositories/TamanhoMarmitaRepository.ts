import { dataSource } from "../../../../../shared/typeorm";
import { Equal, Repository } from "typeorm";
import { IBusca } from "../../../domain/models/IBusca";
import { ITamanhoMarmitaRepository, SearchParamsBusca } from "../../../domain/repositories/ITamanhoRepository";
import TamanhoMarmita from "../../TamanhoMarmita";
import { ITamanhoMarmita } from "../../../domain/models/ITamanhoMarmita";
import { ICreateTamanhoMarmita } from "../../../domain/models/ICreateTamanhoMarmita";

class TamanhoMarmitaRepository implements ITamanhoMarmitaRepository {
  private ormRepository: Repository<TamanhoMarmita>;

  constructor() {
    this.ormRepository = dataSource.getRepository(TamanhoMarmita);
  }

  public async busca(
    {
      nome,
      page, 
      skip, 
      take
  }: SearchParamsBusca): Promise<IBusca> {
    let query = this.ormRepository
    .createQueryBuilder('tamanhos_marmita')
    .where(`LOWER(tamanhos_marmita.nome) LIKE LOWER(:nome)`, { nome: `%${nome}%` })
    .skip(skip)
    .take(take);

    const [tamanhos_marmita, count] = await query.getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: tamanhos_marmita,
    };
  return result;
  }

  public async findAll(): Promise<ITamanhoMarmita[]> {
    const tamanhos_marmita = await this.ormRepository.find();
    return tamanhos_marmita;
  }

  public async create({
    nome,
    valor
  }: ICreateTamanhoMarmita): Promise<ITamanhoMarmita> {
    const tamanho_marmita = this.ormRepository.create({
      nome,
      valor
    });
    await this.ormRepository.save(tamanho_marmita);
    return tamanho_marmita;
  }

  public async save(tamanho_marmita: ITamanhoMarmita): Promise<ITamanhoMarmita> {
    await this.ormRepository.save(tamanho_marmita);
    return tamanho_marmita;
  }

  public async remove(tamanho_marmita: TamanhoMarmita): Promise<void> {
    await this.ormRepository.remove(tamanho_marmita);
  }

  public async findByNome(nome: string): Promise<TamanhoMarmita[] | null> {
    const tamanhos_marmita = await this.ormRepository.findBy({
      nome: Equal(nome)
    });

    return tamanhos_marmita;
  }

  public async findById(id: string): Promise<TamanhoMarmita | null> {
    const tamanho_marmita = await this.ormRepository.findOneBy({
      id
    });

    return tamanho_marmita;
  }


}

export default TamanhoMarmitaRepository;
