import express from 'express';
import usersController from './users.controller';

const routes = express.Router();

routes.post('/signup', usersController.userCreate);

export const userRoutes = routes;