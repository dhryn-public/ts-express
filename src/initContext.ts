import express, { Express, NextFunction, Request, Response } from 'express';

import {IExpressConfig} from './index';

const addCORSHeaders = (app: Express, config: IExpressConfig) => {
    if (!config.corsOrigin) {
        return;
    }

    app.use((request: Request, response: Response, next: NextFunction) => {
        response.header('Access-Control-Allow-Origin', config.corsOrigin);
        response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-custom-header');
        next();
    });
};

const addPostJSONHeaderCheck = (app: Express, config: IExpressConfig) => {
    if (undefined === config.acceptHeader) {
        return;
    }

    const acceptHeader: string = config.acceptHeader;
    app.use('/', (req, res, next) => {
        if (req.method === 'POST' && !req.is(acceptHeader)) {
            // Send error here
            res
                .status(400)
                .send(`post data accepts ${config.acceptHeader} header only.`);
            return;
        }

        next();
    });

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
};

export const initContext = (config: IExpressConfig): Express => {
    const app: Express = express();

    addCORSHeaders(app, config);
    addPostJSONHeaderCheck(app, config);

    return app;
};
