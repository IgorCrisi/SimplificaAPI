import { IPedidoRepository, SearchParamsBusca } from "../../../domain/repositories/IPedidoRepository";
import { dataSource } from "../../../../../shared/typeorm";
import { EntityRepository, Equal, Repository } from "typeorm";
import { IBusca } from "../../../domain/models/IBusca";
import Pedido from "../../Pedido";
import { IPedido } from "../../../domain/models/IPedido";
import { ICreatePedido } from "../../../domain/models/ICreatePedido";

class PedidoRepository implements IPedidoRepository {
  private ormRepository: Repository<Pedido>;

  constructor() {
    this.ormRepository = dataSource.getRepository(Pedido);
  }

  public async busca(
    {
      nome, 
      numero, 
      finalizado, 
      data, 
      page, 
      skip, 
      take
  }: SearchParamsBusca): Promise<IBusca> {
    const [day, month, year] = data.split('/').map(part => parseInt(part, 10));
    const specificDate = new Date(year, month - 1, day);
    const startOfDay = new Date(specificDate.setHours(0, 0, 0, 0));
    const endOfDay = new Date(specificDate.setHours(23, 59, 59, 999));
    
    let query = this.ormRepository
    .createQueryBuilder('pedidos')
    .where(`LOWER(pedidos.nome) LIKE LOWER(:nome)`, { nome: `%${nome}%` })
    .andWhere('pedidos.finalizado = :finalizado', {finalizado: finalizado})
    .skip(skip)
    .take(take);

    if (numero != '') {
      query = query.andWhere('pedidos.numero = :numero', {numero: numero});
    }

    if (data != '') {
      query = query.andWhere('pedidos.created_at BETWEEN :startOfDay AND :endOfDay', {startOfDay: startOfDay, endOfDay: endOfDay});
    }

    const [pedidos, count] = await query.getManyAndCount();

    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: pedidos,
    };
  return result;
  }

  public async findAll(): Promise<IPedido[]> {
    const pedidos = await this.ormRepository.find();
    return pedidos;
  }

  public async create({
    tamanho,
    ingredientes,
    bebidas,
    nome,
    telefone,
    endereco,
    credito,
    debito,
    dinheiro,
    pix,
    finalizado,
    troco,
    total,
  }: ICreatePedido): Promise<IPedido> {
    const pedido = this.ormRepository.create({
      tamanho,
      ingredientes,
      bebidas,
      nome,
      telefone,
      endereco,
      credito,
      debito,
      dinheiro,
      pix,
      finalizado,
      troco,
      total
    });
    await this.ormRepository.save(pedido);
    return pedido;
  }

  public async save(pedido: IPedido): Promise<IPedido> {
    await this.ormRepository.save(pedido);
    return pedido;
  }

  public async remove(pedido: Pedido): Promise<void> {
    await this.ormRepository.remove(pedido);
  }

  public async findByNumero(numero: number): Promise<Pedido[] | null> {
    const pedidos = await this.ormRepository.findBy({
      numero: Equal(numero)
    });

    return pedidos;
  }

  public async findById(id: string): Promise<Pedido | null> {
    const pedido = await this.ormRepository.findOneBy({
      id
    });

    return pedido;
  }


}

export default PedidoRepository;
