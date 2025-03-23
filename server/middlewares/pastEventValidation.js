import Joi from "joi";

function pastEventCreateValidation(req, res, next) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ message: "Bad request", error: error.details });
  }

  next();
}

export { pastEventCreateValidation };
