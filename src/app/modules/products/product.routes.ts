import express from 'express'
import { productsController } from "./product.controller";
import { authGuard } from '../../middleware/authGuard';

const routes = express.Router();

routes.post('/', authGuard, productsController.createProducts);

routes.get('/', productsController.getAllProducts);

routes.get('/:id', productsController.getSingleProduct);

routes.put('/:id', authGuard, productsController.updateProduct);

export const productRoutes = routes