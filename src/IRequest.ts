import {Request as ExpressRequest} from 'express';
import {ParamsDictionary} from 'express-serve-static-core';

export interface IRequest extends ExpressRequest<ParamsDictionary> {

}
