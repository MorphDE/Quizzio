import { generateRandomSalt, hash } from "../utils/hash.js";
import { createToken } from "../utils/createToken.js";
import { Users } from './../models/users.js';
import { UserQuestion } from "../models/users-questions.js";

// userInfo = { firstname, lastname, email, password }
async function registerUser({ vorname, nachname, email, password }) {
    const foundUserWithEmail = await Users.findOne({ email });
    if (foundUserWithEmail)
      throw new Error("User with this email already has an account");
  
    const passwordSalt = generateRandomSalt();
    const passwordHash = hash(`${password}${passwordSalt}`); // Klartext password mit salt hashen
  
    const user = await Users.create({
      vorname,
      nachname,
      email,
      passwordHash, // hash(password + passwordSalt)
      passwordSalt, // salt
    });
  
    // await sendVerificationEmail(user);
  
    return userToView(user);
  }

async function loginUser({ email, password }) {
  const user = await Users.findOne({ email });
  if (!user) throw new Error("Invalid login");

  // if (!user.isEmailVerified)
  //   throw new Error("Email not verified, login aborted");

  const passwordHash = hash(`${password}${user.passwordSalt}`);
  const correctPassword = passwordHash === user.passwordHash;
  if (!correctPassword) throw new Error("Invalid login");

  const accessToken = createToken(user, "access"); // header.payload.signature
  //   const refreshToken = createToken(user, "refresh"); // header.payload.signature

  return {
    user: userToView(user),
    tokens: { accessToken },
  };
}
  
  function userToView(user) {
    return {
      vorname: user.vorname,
      nachname: user.nachname,
      email: user.email,
    };
  }

  const getUserInfos = async (id) => {
    const userInfo = await UserQuestion.find({ userId: id});
    return userInfo;
  }

  export const UserService = {
    registerUser,
    loginUser,
    getUserInfos
};