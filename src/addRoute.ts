import {Express} from 'express';
import {registerHandler} from './registerHandler';

export type TMethod = 'get' | 'post' | 'put';

export interface IAddRoute {
    route: string;
    method?: TMethod;
    handler: any;
    middleware?: any[];
}

export const addRoute = (app: Express, config: IAddRoute) => {
    const middleware = config.middleware || [];
    middleware.push(registerHandler(config.handler));

    app[config.method || 'get'](config.route, ...middleware);
};
