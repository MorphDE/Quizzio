import express from "express";
import { CategoriesController } from './../controllers/categories-controller.js';
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const CategoriesRouter = express
  .Router()
  .get("/", doJwtAuth, CategoriesController.getAllCategories)
  // .get("/:questionId", QuestionsController.getOneQuestion)
  // .post("/", QuestionsController.createNewQuestion)
  // .patch("/:questionId", QuestionsController.updateQuestion)
  // .delete("/:questionId", QuestionsController.deleteQuestion);