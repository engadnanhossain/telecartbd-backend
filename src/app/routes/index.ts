import express from 'express'
import { productRoutes } from '../modules/products/product.route';

export const routes = express.Router();

const moduleRoutes = [
    {
        path: '/products',
        route: productRoutes
    }
]

moduleRoutes.forEach(route => routes.use(route.path, route.route))