import {Request, Response} from 'express';
import {IResponse} from './IResponse';

export const registerHandler = (app: any) => async (request: Request, response: Response) => {
    try {
        const result: IResponse = await app(request);
        response.status(result.code).json(result.body);
    } catch (e) {
        // tslint:disable-next-line
        console.log(e);
        response.status(500).json(e);
    }
};
