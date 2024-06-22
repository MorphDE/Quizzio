import { Question } from "../models/questions.js";
import { UserQuestion } from "../models/users-questions.js";

const getAllQuestions = async () => {
    const allQuestions = await Question.find({});
    return allQuestions;
}

const createQuestion = async (questionInfo) => {
  const questionFound = await Question.findOne({ frage: questionInfo.frage })
  if (questionFound) {
    throw new Error("Question with this name already exists!");
  } else {
    const newQuestion = await Question.create(questionInfo);
    return newQuestion;
  }
}

const deleteQuestion = async (questionId) => {
  const delQuestion = await Question.findByIdAndDelete(questionId)
    if (!delQuestion) throw new Error("Question with this id doesn't exist!");
    else return delQuestion;
};

const patchQuestion = async (questionId, questionUpdateInfo) => {
  const updatedQuestion = await Question.findByIdAndUpdate(
      questionId,
      { $set: questionUpdateInfo },
      { new: true }
    );
    return updatedQuestion;
}

const getQuestionById = async (questionId) => {
  const questionFound = await Question.findById(questionId);
  if (questionFound) {
      return questionFound;
  } else {
      throw new Error("Question with this id was not found!");
  }
}

const getRandomQuestionByCategory = async (categoryId) => {
  const categoryQuestionsFound = await Question.find({ kategorie: categoryId })
  if (categoryQuestionsFound) {
    const randomIndex = Math.floor(Math.random() * categoryQuestionsFound.length);
    return categoryQuestionsFound[randomIndex];
  } else {
    throw new Error("Question from specific Category was not found!");
  }
}

//______________ USER - QUESTIONS ______________

const addQuestionResult = async (userId, questionId, questionResult) => {
  const addResult = await UserQuestion.create({ userId, questionId, questionResult })
  return addResult;
}

export const QuizService = {
    getAllQuestions,
    createQuestion,
    deleteQuestion,
    patchQuestion,
    getQuestionById,
    getRandomQuestionByCategory,
    addQuestionResult,
};
