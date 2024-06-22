import express from "express";
import { UsersController } from './../controllers/users-controller.js';
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const UsersRouter = express
  .Router()
//   .get("/", QuestionsController.getAllQuestions)
//   .get("/:questionId", QuestionsController.getOneQuestion)
  .post("/register", UsersController.postRegisterUserCtrl)
  .post("/login", UsersController.postLoginUserCtrl)

  .get("/stats", doJwtAuth, UsersController.getUserInfos)
//   .patch("/:questionId", QuestionsController.updateQuestion)
//   .delete("/:questionId", QuestionsController.deleteQuestion);