import express, {Express} from 'express'
import userRouter from "./users/users";
import {Server} from 'http'
import {LoggerService} from "./logger/logger.service";

export class App {
    app: Express;
    server: Server;
    port: number;
    logger: LoggerService;

    constructor(logger: LoggerService) {
        this.app = express();
        this.port = 8000;
        this.logger = logger;
    }

    public async init() {
        this.useRoutes();
    }

    useRoutes() {
        this.app.use('./user', userRouter);
        this.server = this.app.listen(this.port);
        this.logger.log(`сервер запущен на http:localhost:${this.port}`);
    }
}