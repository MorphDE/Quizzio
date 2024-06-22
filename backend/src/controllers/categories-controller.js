import { CategoriesService } from './../service/categories-service.js';

async function getAllCategories(req, res) {
  try {
    const getCategories = await CategoriesService.getAllCategories()
    res.json(getCategories)
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add find all Questions" });
  }
}

// async function createNewQuestion(req, res) {
//   try {
//     const createAQuestion = await QuizService.createQuestion(req.body)
//     res.json(createAQuestion)
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ err, message: "Could not create Question." });
//   }
// }

// async function deleteQuestion(req, res) {
//   try {
//     const questionId = req.params.questionId;
//     const questionDelete = await QuizService.deleteQuestion(questionId)
//     res.json(questionDelete)
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ err, message: "Could not delete Question." });
//   }
// }

// async function getOneQuestion(req, res) {
//   try {
//     const questionId = req.params.questionId;
//     const questionById = await QuizService.getQuestionById(questionId)
//     res.json(questionById || {})
//   }
//   catch (err) {
//     console.log(err);
//     res.status(500).json({ err, message: "Could not add find recipe " + questionId });
//   };
// }

// async function updateQuestion(req, res) {
//   try {
//     const questionId = req.params.questionId;
//     const updateInfo = req.body;
//     const patchedQuestion = await QuizService.patchQuestion(questionId, updateInfo)
//     res.json(patchedQuestion || {})
//   }
//   catch(err) {
//       console.log(err);
//       res.status(500).json({ err, message: "Could not add new recipe" });
//     };
// }


export const CategoriesController = {
  getAllCategories,
};