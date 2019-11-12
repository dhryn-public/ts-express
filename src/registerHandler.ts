import {Response as ExpressResponse} from 'express';
import {IRequest} from './IRequest';
import {IResponse} from './IResponse';

export const registerHandler = (app: any) => async (request: IRequest, response: ExpressResponse) => {
    try {
        const result: IResponse = await app(request);
        response.status(result.code).json(result.body);
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
        response.status(500).json(e);
    }
};
