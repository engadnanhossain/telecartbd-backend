import express from 'express'
import { productsController } from "./product.controller";

const routes = express.Router();

routes.post('/', productsController.createProducts);
routes.get('/', productsController.getAllProducts);
routes.get('/:id', productsController.getSingleProduct);
routes.put('/:id', productsController.updateProduct);

export const productRoutes = routes