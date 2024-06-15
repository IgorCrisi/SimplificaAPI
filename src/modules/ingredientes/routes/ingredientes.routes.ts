import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import IngredienteController from '../controllers/IngredienteController';

const ingredienteRouter = Router();
const ingredienteController = new IngredienteController();

ingredienteRouter.get('/', ingredienteController.index);

ingredienteRouter.get('/listByNome/:nome', ingredienteController.listByNome);
 
ingredienteRouter.get(
  '/:id',
  ingredienteController.show
);

ingredienteRouter.post(
    '/busca',
    celebrate({
      [Segments.BODY]: {
        nome: Joi.string().allow(null, ''),
      },
    }),
    ingredienteController.busca
  );

ingredienteRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
        nome: Joi.string().required(),
    },
  }),
  ingredienteController.create,
);

ingredienteRouter.patch(
  '/update/:id',
  celebrate({
    [Segments.BODY]: {
        nome: Joi.string().required(),
    },
  }),
  ingredienteController.update,
);

ingredienteRouter.delete(
  '/delete/:id',
  ingredienteController.delete,
);

export default ingredienteRouter;
