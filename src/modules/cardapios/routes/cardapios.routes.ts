import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import CardapioController from '../controllers/CardapioController';

const cardapioRouter = Router();
const cardapioController = new CardapioController();

cardapioRouter.get('/', cardapioController.index);

cardapioRouter.get('/listByDia/:dia', cardapioController.listByDia);
 
cardapioRouter.get(
  '/:id',
  cardapioController.show
);

cardapioRouter.post(
    '/busca',
    celebrate({
      [Segments.BODY]: {
        dia: Joi.string().allow(null, ''),
      },
    }),
    cardapioController.busca
  );

cardapioRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
        dia: Joi.string().required(),
        ingredientes: Joi.array().required(),
        bebidas: Joi.array().required(),
    },
  }),
  cardapioController.create,
);

cardapioRouter.patch(
  '/update/:id',
  celebrate({
    [Segments.BODY]: {
        dia: Joi.string().required(),
        ingredientes: Joi.array().required(),
        bebidas: Joi.array().required(),
    },
  }),
  cardapioController.update,
);

cardapioRouter.delete(
  '/delete/:id',
  cardapioController.delete,
);

export default cardapioRouter;
