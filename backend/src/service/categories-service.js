import { Categories } from './../models/categories.js';

const getAllCategories = async () => {
    const allCategories = await Categories.find({});
    return allCategories;
}

// const createQuestion = async (questionInfo) => {
//   const questionFound = await Question.findOne({ frage: questionInfo.frage })
//   if (questionFound) {
//     throw new Error("Question with this name already exists!");
//   } else {
//     const newQuestion = await Question.create(questionInfo);
//     return newQuestion;
//   }
// }

// const deleteQuestion = async (questionId) => {
//   const delQuestion = await Question.findByIdAndDelete(questionId)
//     if (!delQuestion) throw new Error("Question with this id doesn't exist!");
//     else return delQuestion;
// };

// const patchQuestion = async (questionId, questionUpdateInfo) => {
//   const updatedQuestion = await Question.findByIdAndUpdate(
//       questionId,
//       { $set: questionUpdateInfo },
//       { new: true }
//     );
//     return updatedQuestion;
// }

// const getQuestionById = async (questionId) => {
//   const questionFound = await Question.findById(questionId);
//   if (questionFound) {
//       return questionFound;
//   } else {
//       throw new Error("Question with this id was not found!");
//   }
// }

export const CategoriesService = {
    getAllCategories,
};
