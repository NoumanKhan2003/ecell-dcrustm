import Joi from "joi";

function blogsCreateValidation(req, res, next) {
  const schema = Joi.object({
    titleMain: Joi.string().required(),
    contentMain: Joi.string().required(),
    image: Joi.string().required(),
    sections: Joi.array().items(
      Joi.object({
        title: Joi.string().required(),
        content: Joi.string().required(),
      })
    ),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ message: "Bad request", error: error.details });
  }

  next();
}

export {blogsCreateValidation};
