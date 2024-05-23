const Joi = require("joi");

const validateRegistration = (userData) => {
    const registerSchema = Joi.object({
        surname: Joi.string().min(3).required(),
        othernames: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        username: Joi.string().min(6).required(),

    })

    return registerSchema.validate(userData)
}

module.exports =  validateRegistration
   
