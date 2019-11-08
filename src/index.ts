export * from './initConfig';
export * from './initContext';
export * from './registerHandler';
export * from './addRoute';
export * from './startExpress';
export * from './IResponse';

export interface IExpressConfig {
    corsOrigin?: string;
    acceptHeader?: string;
}
