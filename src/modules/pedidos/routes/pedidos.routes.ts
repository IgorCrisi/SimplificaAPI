import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import PedidoController from '../controllers/PedidoController';

const pedidoRouter = Router();
const pedidoController = new PedidoController();

pedidoRouter.get('/', pedidoController.index);

pedidoRouter.get('/listByNumero/:numero', pedidoController.listByNumero);
 
pedidoRouter.get(
  '/:id',
  pedidoController.show
);

pedidoRouter.post(
    '/busca',
    celebrate({
      [Segments.BODY]: {
        nome: Joi.string().allow(null, ''),
        numero: Joi.number().allow(null, ''),
        finalizado: Joi.boolean().required(),
        data: Joi.string().allow(null, ''),
      },
    }),
    pedidoController.busca
  );

pedidoRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
        tamanho: Joi.string().required(),
        ingredientes: Joi.array().required(),
        bebidas: Joi.array().required(),
        nome: Joi.string().required(),
        telefone: Joi.string().required(),
        endereco: Joi.string().required(),
        credito: Joi.boolean().required(),
        debito: Joi.boolean().required(),
        dinheiro: Joi.boolean().required(),
        pix: Joi.boolean().required(),
        finalizado: Joi.boolean().required(),
        troco: Joi.string().allow(null, ''),
        total: Joi.number().required(),
    },
  }),
  pedidoController.create,
);

pedidoRouter.patch(
  '/update/:id',
  celebrate({
    [Segments.BODY]: {
        tamanho: Joi.string().required(),
        ingredientes: Joi.array().required(),
        bebidas: Joi.array().required(),
        nome: Joi.string().required(),
        telefone: Joi.string().required(),
        endereco: Joi.string().required(),
        credito: Joi.boolean().required(),
        debito: Joi.boolean().required(),
        dinheiro: Joi.boolean().required(),
        pix: Joi.boolean().required(),
        finalizado: Joi.boolean().required(),
        troco: Joi.string().allow(null, ''),
        total: Joi.number().required(),
    },
  }),
  pedidoController.update,
);

pedidoRouter.patch(
  '/setFinalizado/:id',
  celebrate({
    [Segments.BODY]: {
        finalizado: Joi.boolean().required(),
    },
  }),
  pedidoController.setFinalizado,
);

pedidoRouter.delete(
  '/delete/:id',
  pedidoController.delete,
);

export default pedidoRouter;
