import { IPedidoRepository } from '../../modules/pedidos/domain/repositories/IPedidoRepository';
import PedidoRepository from '../../modules/pedidos/typeorm/entities/repositories/PedidoRepository';
import { container } from 'tsyringe';
import { IIngredienteRepository } from '../../modules/ingredientes/domain/repositories/IIngredienteRepository';
import IngredienteRepository from '../../modules/ingredientes/typeorm/entities/repositories/IngredienteRepository';
import { IBebidaRepository } from '../../modules/bebidas/domain/repositories/IBebidaRepository';
import BebidaRepository from '../../modules/bebidas/typeorm/entities/repositories/BebidaRepository';
import { ITamanhoMarmitaRepository } from '../../modules/tamanhosMarmita/domain/repositories/ITamanhoRepository';
import TamanhoMarmitaRepository from '../../modules/tamanhosMarmita/typeorm/entities/repositories/TamanhoMarmitaRepository';
import { ICardapioRepository } from '../../modules/cardapios/domain/repositories/ICardapioRepository';
import CardapioRepository from '../../modules/cardapios/typeorm/entities/repositories/CardapioRepository';

container.registerSingleton<IPedidoRepository>(
  'PedidoRepository',
  PedidoRepository,
);

container.registerSingleton<IIngredienteRepository>(
  'IngredienteRepository',
  IngredienteRepository,
);

container.registerSingleton<IBebidaRepository>(
  'BebidaRepository',
  BebidaRepository,
);

container.registerSingleton<ITamanhoMarmitaRepository>(
  'TamanhoMarmitaRepository',
  TamanhoMarmitaRepository,
);

container.registerSingleton<ICardapioRepository>(
  'CardapioRepository',
  CardapioRepository,
);