import express from 'express';
import authController from './auth.controller';

const routes = express.Router();

routes.post('/login', authController.loginUser);

export const authRoutes = routes;