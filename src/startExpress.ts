import {Express} from 'express';

export function startExpress<IConfig>(app: Express, port: number) {
    app.listen( port, () => {
        // tslint:disable-next-line:no-console
        console.log( `server started at http://localhost:${ port }` );
    });
}
