"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();

var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _indexRoutes = require('./routes/indexRoutes'); var _indexRoutes2 = _interopRequireDefault(_indexRoutes);
var _desafioRoutes = require('./routes/desafioRoutes'); var _desafioRoutes2 = _interopRequireDefault(_desafioRoutes);

class App {
    constructor() {
        this.app = _express2.default.call(void 0, );
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(_express2.default.json());
    }

    routes() {
        this.app.use('/', _indexRoutes2.default);
        this.app.use('/desafio/', _desafioRoutes2.default);
    }
}

exports. default = new App().app;
