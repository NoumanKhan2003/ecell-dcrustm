import Joi from "joi";

function blogsCreateValidation(req, res, next) {
  const schema = Joi.object({
    titleMain: Joi.string().required(),
    contentMain: Joi.string().required(),
    image: Joi.string(),
    sections: Joi.string(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ message: "Bad request", error: error.details });
  }

  next();
}

export { blogsCreateValidation };
