import { UserService } from './../service/users-service.js';

async function postRegisterUserCtrl(req, res) {
  try {
    const userInfo = req.body;
    const result = await UserService.registerUser(userInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: err.message || "Could not register" });
  }
}

async function postLoginUserCtrl(req, res) {
  try {
    const userInfo = {
      email: req.body.email,
      password: req.body.password,
    };
    const result = await UserService.loginUser(userInfo);
    res.json({ result });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not login" });
  }
};

async function getUserInfos(req, res) {
  try {
    const userData = req.authenticatedUserId;
    const dataResult = await UserService.getUserInfos(userData);
    const statistic = {
      totalAnswers: dataResult.length,
      rightAnswers: dataResult.filter(x => x.questionResult === true).length,
      wrongAnswers: dataResult.filter(x => x.questionResult === false).length,
    }
    res.json(statistic);
  }
  catch (err) {
    console.log(err);
    res.status(500).json({ err, message: err.message || "Could not get Statistic!" });
  }
}

export const UsersController = {
  postRegisterUserCtrl,
  postLoginUserCtrl,
  getUserInfos
};

