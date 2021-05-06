import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import indexRoutes from './routes/indexRoutes';
import desafioRoutes from './routes/desafioRoutes';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', indexRoutes);
        this.app.use('/desafio/', desafioRoutes);
    }
}

export default new App().app;
