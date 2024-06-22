import express from "express";
import { QuestionsController } from "../controllers/questions-controller.js";
import { doJwtAuth } from "../middlewares/doJwtAuth.js";

export const QuestionRouter = express
  .Router()
  .get("/", doJwtAuth, QuestionsController.getAllQuestions)
  .get("/:questionId", doJwtAuth, QuestionsController.getOneQuestion)
  .post("/", doJwtAuth, QuestionsController.createNewQuestion)
  .patch("/:questionId", doJwtAuth, QuestionsController.updateQuestion)
  .delete("/:questionId", doJwtAuth, QuestionsController.deleteQuestion)
  .get("/quiz/:categoryId", doJwtAuth, QuestionsController.getRandomQuestionByCategory)

  .post("/addresult", doJwtAuth, QuestionsController.addQuestionAnswer)
