import express from 'express'
import { productRoutes } from '../modules/products/product.route';
import { categoryRoutes } from '../modules/category/category.routes';

export const routes = express.Router();

const moduleRoutes = [
    {
        path: '/products',
        route: productRoutes
    },
    {
        path: '/category',
        route: categoryRoutes
    }
]

moduleRoutes.forEach(route => routes.use(route.path, route.route))