import { QuizService } from '../service/questions-services.js';

async function getAllQuestions(req, res) {
  try {
    const getQuests = await QuizService.getAllQuestions()
    res.json(getQuests)
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add find all Questions" });
  }
}

async function createNewQuestion(req, res) {
  try {
    const createAQuestion = await QuizService.createQuestion(req.body)
    res.json(createAQuestion)
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not create Question." });
  }
}

async function deleteQuestion(req, res) {
  try {
    const questionId = req.params.questionId;
    const questionDelete = await QuizService.deleteQuestion(questionId)
    res.json(questionDelete)
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not delete Question." });
  }
}

async function getOneQuestion(req, res) {
  try {
    const questionId = req.params.questionId;
    const questionById = await QuizService.getQuestionById(questionId)
    res.json(questionById || {})
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add find Question " });
  };
}

async function updateQuestion(req, res) {
  try {
    const questionId = req.params.questionId;
    const updateInfo = req.body;
    const patchedQuestion = await QuizService.patchQuestion(questionId, updateInfo)
    res.json(patchedQuestion || {})
  }
  catch(err) {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new recipe" });
    };
}

async function getRandomQuestionByCategory (req, res) {
  try {
    const categoryId = req.params.categoryId;
    const categoryById = await QuizService.getRandomQuestionByCategory(categoryId)
    res.json(categoryById || {})
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add find Category " });
  };
}

//______________ USER - QUESTIONS ______________

async function addQuestionAnswer(req, res) {
  try {
    const createResult = await QuizService.addQuestionResult(req.authenticatedUserId, req.body.questionId, req.body.questionResult)
    res.json(createResult)
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add Question Answer" });
  }
}

export const QuestionsController = {
  getAllQuestions,
  createNewQuestion,
  deleteQuestion,
  updateQuestion,
  getOneQuestion,
  getRandomQuestionByCategory,
  addQuestionAnswer,
};