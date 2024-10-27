import express from 'express'
import { productsController } from "./product.controller";

const routes = express.Router();


routes.get('/', productsController.getAllProducts);

export const productRoutes = routes