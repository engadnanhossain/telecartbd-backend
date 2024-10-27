import express from 'express'
import { productsController } from "./product.controller";

const routes = express.Router();

routes.post('/', productsController.createProducts)
routes.get('/', productsController.getAllProducts);

export const productRoutes = routes