import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import BebidaController from '../controllers/BebidaController';

const bebidaRouter = Router();
const bebidaController = new BebidaController();

bebidaRouter.get('/', bebidaController.index);

bebidaRouter.get('/listByNome/:nome', bebidaController.listByNome);
 
bebidaRouter.get(
  '/:id',
  bebidaController.show
);

bebidaRouter.post(
    '/busca',
    celebrate({
      [Segments.BODY]: {
        nome: Joi.string().allow(null, ''),
      },
    }),
    bebidaController.busca
  );

bebidaRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
        nome: Joi.string().required(),
        valor: Joi.number().required(),
    },
  }),
  bebidaController.create,
);

bebidaRouter.patch(
  '/update/:id',
  celebrate({
    [Segments.BODY]: {
        nome: Joi.string().required(),
        valor: Joi.number().required(),
    },
  }),
  bebidaController.update,
);

bebidaRouter.delete(
  '/delete/:id',
  bebidaController.delete,
);

export default bebidaRouter;
