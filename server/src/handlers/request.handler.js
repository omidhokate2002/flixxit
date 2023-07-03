import { validationResult } from "express-validator";

const validate = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) return res.status(400).json(error.array()[0].msg);
};

export default { validate };
