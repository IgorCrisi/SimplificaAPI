import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import TamanhoController from '../controllers/TamanhoController';

const tamanhoRouter = Router();
const tamanhoController = new TamanhoController();

tamanhoRouter.get('/', tamanhoController.index);

tamanhoRouter.get('/listByNome/:nome', tamanhoController.listByNome);
 
tamanhoRouter.get(
  '/:id',
  tamanhoController.show
);

tamanhoRouter.post(
    '/busca',
    celebrate({
      [Segments.BODY]: {
        nome: Joi.string().allow(null, ''),
      },
    }),
    tamanhoController.busca
  );

tamanhoRouter.post(
  '/create',
  celebrate({
    [Segments.BODY]: {
        nome: Joi.string().required(),
        valor: Joi.number().required(),
    },
  }),
  tamanhoController.create,
);

tamanhoRouter.patch(
  '/update/:id',
  celebrate({
    [Segments.BODY]: {
        nome: Joi.string().required(),
        valor: Joi.number().required(),
    },
  }),
  tamanhoController.update,
);

tamanhoRouter.delete(
  '/delete/:id',
  tamanhoController.delete,
);

export default tamanhoRouter;
