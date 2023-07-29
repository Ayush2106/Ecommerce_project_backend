// password hasig ke lieye hai ye file taaki koi encrpt  na kar paae
//1>>>> first function bcrpyt ke lie
// 2>///// second function compare karne ke lie...

import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};

//compare password
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};
