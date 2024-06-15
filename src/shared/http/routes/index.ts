import pedidoRouter from '../../../modules/pedidos/routes/pedidos.routes';
import { Router } from 'express';
import ingredienteRouter from '../../../modules/ingredientes/routes/ingredientes.routes';
import bebidaRouter from '../../../modules/bebidas/routes/bebidas.routes';
import tamanhoRouter from '../../../modules/tamanhosMarmita/routes/tamanhos.routes';
import cardapioRouter from '../../../modules/cardapios/routes/cardapios.routes';

const routes = Router();

routes.use('/pedidos', pedidoRouter);
routes.use('/ingredientes', ingredienteRouter);
routes.use('/bebidas', bebidaRouter);
routes.use('/tamanhos', tamanhoRouter);
routes.use('/cardapios', cardapioRouter);

export default routes;
