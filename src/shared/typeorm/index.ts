import { DataSource } from 'typeorm';
import { CreatePedidos1716750173038 } from './migrations/1716750173038-CreatePedidos';
import Pedido from '../../modules/pedidos/typeorm/Pedido';
import { CreateIngredientes1717020296870 } from './migrations/1717020296870-CreateIngredientes';
import { CreateBebidas1717020557704 } from './migrations/1717020557704-CreateBebidas';
import { CreateCardapio1717020598547 } from './migrations/1717020598547-CreateCardapio';
import Ingrediente from '../../modules/ingredientes/typeorm/Ingrediente';
import Bebida from '../../modules/bebidas/typeorm/Bebida';
import { CreateTamanhoMarmita1717196489478 } from './migrations/1717196489478-CreateTamanhoMarmita';
import TamanhoMarmita from '../../modules/tamanhosMarmita/typeorm/TamanhoMarmita';
import Cardapio from '../../modules/cardapios/typeorm/Cardapio';

export const dataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'tpbrdb',
    logging: false,
    entities: [
        Pedido, 
        Ingrediente,
        Bebida,
        TamanhoMarmita,
        Cardapio
    ],
    migrations: [
        CreatePedidos1716750173038,
        CreateIngredientes1717020296870,
        CreateBebidas1717020557704,
        CreateCardapio1717020598547,
        CreateTamanhoMarmita1717196489478
    ],
});
