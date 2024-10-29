import express from 'express'
import { productRoutes } from '../modules/products/product.routes';
import { categoryRoutes } from '../modules/category/category.routes';
import { subCategoryRoutes } from '../modules/subcategory/subcategory.routes';
import { userRoutes } from '../modules/users/users.routes';
import { authRoutes } from '../modules/auth/auth.routes';

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
    },
    {
        path: '/auth',
        route: authRoutes
    }
]

moduleRoutes.forEach(route => routes.use(route.path, route.route))