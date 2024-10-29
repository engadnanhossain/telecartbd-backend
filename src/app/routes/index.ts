import express from 'express'
import { productRoutes } from '../modules/products/product.route';
import { categoryRoutes } from '../modules/category/category.routes';
import { subCategoryRoutes } from '../modules/subcategory/subcategory.routes';

export const routes = express.Router();

const moduleRoutes = [
    {
        path: '/products',
        route: productRoutes
    },
    {
        path: '/category',
        route: categoryRoutes
    },
    {
        path: '/subcategory',
        route: subCategoryRoutes
    }
]

moduleRoutes.forEach(route => routes.use(route.path, route.route))