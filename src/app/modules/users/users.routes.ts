import express from 'express';
import usersController from './users.controller';

const routes = express.Router();

routes.post('/signup', usersController.userCreate);
routes.get('/', usersController.getAllUser);
routes.get('/:email', usersController.getSingleUser)

export const userRoutes = routes;