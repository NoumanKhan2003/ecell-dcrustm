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

function presentEventCreateValidation(req, res, next) {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string(),
    sections: Joi.string(),
    registrationType: Joi.string(),
    registrationLink: Joi.string(),
    prize: Joi.string(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ message: "Bad request", error: error.details });
  }

  next();
}

function eventRegisterFormCreateValidation(req, res, next) {
  const schema = Joi.object({
    eventTitle: Joi.string().trim().required(),
    eventDescription: Joi.string().allow("").optional(),
    questions: Joi.array().min(1).required(),
    image: Joi.any(),
  });
  const parsedData = {
    ...req.body,
    questions:
      typeof req.body.questions === "string"
        ? JSON.parse(req.body.questions)
        : req.body.questions,
  };

  const { error } = schema.validate(parsedData, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ message: "Bad request", error: error.details });
  }

  next();
}

export {
  pastEventCreateValidation,
  presentEventCreateValidation,
  eventRegisterFormCreateValidation,
};
