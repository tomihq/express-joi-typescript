import Joi from 'joi';

export const schemas = {
    createUserSchema: Joi.object({
        name: Joi.string().required()
    })
}