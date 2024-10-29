import express from 'express'
import { productRoutes } from '../modules/products/product.route';
import { categoryRoutes } from '../modules/category/category.routes';
import { subCategoryRoutes } from '../modules/subcategory/subcategory.routes';
import { userRoutes } from '../modules/users/users.routes';

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
    },
    {
        path: '/user',
        route: userRoutes
    }
]

moduleRoutes.forEach(route => routes.use(route.path, route.route))