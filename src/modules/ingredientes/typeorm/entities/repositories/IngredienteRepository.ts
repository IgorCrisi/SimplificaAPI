import { dataSource } from "../../../../../shared/typeorm";
import { Equal, Repository } from "typeorm";
import { IBusca } from "../../../domain/models/IBusca";
import { IIngredienteRepository, SearchParamsBusca } from "../../../domain/repositories/IIngredienteRepository";
import Ingrediente from "../../Ingrediente";
import { IIngrediente } from "../../../domain/models/IIngrediente";
import { ICreateIngrediente } from "../../../domain/models/ICreateIngrediente";

class IngredienteRepository implements IIngredienteRepository {
  private ormRepository: Repository<Ingrediente>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Ingrediente);
  }

  public async busca(
    {
      nome,
      page, 
      skip, 
      take
  }: SearchParamsBusca): Promise<IBusca> {
    let query = this.ormRepository
    .createQueryBuilder('ingredientes')
    .where(`LOWER(ingredientes.nome) LIKE LOWER(:nome)`, { nome: `%${nome}%` })
    .orderBy('ingredientes.nome', 'ASC')
    .skip(skip)
    .take(take);

    const [ingredientes, count] = await query.getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: ingredientes,
    };
  return result;
  }

  public async findAll(): Promise<IIngrediente[]> {
    const ingredientes = await this.ormRepository.find();
    return ingredientes;
  }

  public async create({
    nome,
  }: ICreateIngrediente): Promise<IIngrediente> {
    const ingrediente = this.ormRepository.create({
      nome
    });
    await this.ormRepository.save(ingrediente);
    return ingrediente;
  }

  public async save(ingrediente: IIngrediente): Promise<IIngrediente> {
    await this.ormRepository.save(ingrediente);
    return ingrediente;
  }

  public async remove(ingrediente: Ingrediente): Promise<void> {
    await this.ormRepository.remove(ingrediente);
  }

  public async findByNome(nome: string): Promise<Ingrediente[] | null> {
    const ingredientes = await this.ormRepository.findBy({
      nome: Equal(nome)
    });

    return ingredientes;
  }

  public async findById(id: string): Promise<Ingrediente | null> {
    const ingrediente = await this.ormRepository.findOneBy({
      id
    });

    return ingrediente;
  }


}

export default IngredienteRepository;
