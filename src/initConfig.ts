import * as Joi from '@hapi/joi';
import {IExpressConfig} from './index';

export const initConfig = (): IExpressConfig => {
    const envVarsSchema = Joi
        .object({
            EXPRESS_CORS_ORIGIN: Joi.string().allow(null).default('*'),
            EXPRESS_ACCEPT_HEADER: Joi.string().allow(null).default('application/json'),
        })
        .unknown();

    const { error, value: envVars }: {error: Joi.ValidationError, value: any} = envVarsSchema.validate(process.env);

    if (error) {
        throw new Error(`Config validation error: ${error.message}`);
    }

    return {
        corsOrigin: envVars.EXPRESS_CORS_ORIGIN,
        acceptHeader: envVars.EXPRESS_ACCEPT_HEADER,
    };
};
