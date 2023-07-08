import userModel from "../models/user.model.js";
import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";

const signup = async (req, res) => {
  try {
    const { username, password, displayname } = req.body;

    const checkUser = await userModel.findOne({ username });

    if (checkUser)
      return responseHandler.badRequest(res, "username already used");

    const user = new userModel();

    user.displayname = displayname;
    user.username = username;
    user.setPassword(password);

    await user.save();

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );
    responseHandler.created(res, { token, ...user._doc, id: user.id });
  } catch {
    responseHandler.error(res);
  }
};

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel
      .findOne({ username })
      .select("username password salt id display");
    if (!user) return responseHandler.badRequest(res, "User not exists");
    if (!user.validPassword(password))
      return responseHandler.badRequest(res, "Wrong password");

    const token = jsonwebtoken.sign(
      { data: user.id },
      process.env.TOKEN_SECRET,
      { expiresIn: "24h" }
    );

    user.password = undefined;
    user.salt = undefined;

    responseHandler.created(res, { token, ...user._doc, id: user.id });
  } catch {
    responseHandler.error(res);
  }
};

const updatePassword = async (req, res) => {
  try {
    const { password, newPassword } = req.body;

    const user = await userModel
      .findById(req.user.id)
      .select("Password id salt");

    if (!user) return responseHandler.unauthorize(res);

    if (!user.validPassword(password))
      return responseHandler.badRequest(res, "Wrong Password");

    user.setPassword(newPassword);

    await user.save();

    responseHandler.ok(res);
  } catch {
    responseHandler.error(res);
  }
};

const getInfo = async (req, res) => {
  try {
    const user = await userModel.findById(req.user.id);

    if (!user) return responseHandler.notFound(res);

    responseHandler.ok(res, user);
  } catch {
    responseHandler.error(res);
  }
};

export default {
  signup,
  signin,
  updatePassword,
  getInfo,
};
