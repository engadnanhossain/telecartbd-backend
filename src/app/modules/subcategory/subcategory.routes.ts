import express from "express";
import subcategoryController from "./subcategory.controller";

const routes = express.Router();

routes.post('/', subcategoryController.createSubcategory);
routes.get('/', subcategoryController.getAllSubcategory);
routes.get('/:id', subcategoryController.getSingleSubcategory);
routes.put('/:id', subcategoryController.updateSubcategory);
routes.delete('/:id', subcategoryController.deleteSubcategory);

export const subCategoryRoutes = routes;