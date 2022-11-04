import joi from 'joi'
import { VALID_MODE } from '../config/index.js'
class JoiValidation {
    constructor(error) {
        if (VALID_MODE)
            this.error = error
        else
            this.error = null
    }
    static signupRecruiter(body) {

        const registerValidationSchema = joi.object({
            first_name: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            last_name: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            password: joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            repeat_password: joi.ref('password'),
            email: joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            position: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            business_webpage: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            business_mobile_number: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            company_logo: joi.string()
                .min(3)
                .max(30)
            ,
            business_address: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required()
            ,
            country: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required()
            ,
            city: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required()
            ,
            contact_person_name: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required()
            ,
            contact_person_number: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required()
            ,
            contact_person_email: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required()
            ,
            company_name: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required()
            ,

        })
        const { error } = registerValidationSchema.validate(body)
        if (error)
            return new JoiValidation(error)
        else
            return new JoiValidation(null)
    }
    static signupSeeker(body) {
        const registerValidationSchema = joi.object({

            first_name: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            last_name: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            position: joi.string()
                .alphanum()
                .min(3)
                .max(30)
                .required(),
            password: joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
            repeat_password: joi.ref('password'),
            email: joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

        })
        const { error } = registerValidationSchema.validate(body)
        if (error)
            return new JoiValidation(error)
        else
            return new JoiValidation(null)
    }
    static signin(body) {
        const signInValidationSchema = joi.object({
            email: joi.string()
                .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
            password: joi.string()
                .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        })
        const { error } = signInValidationSchema.validate(body)
        if (error)
            return new JoiValidation(error)
        else
            return new JoiValidation(null)
    }
    static JobPost(body) {
        const JobValidationSchema = joi.object({
            title: joi.string()
                .required(),

        })
        const { error } = JobValidationSchema.validate(body)
        if (error)
            return new JoiValidation(error)
        else
            return new JoiValidation(null)
    }


}
export { JoiValidation }