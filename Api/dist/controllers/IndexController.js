"use strict";Object.defineProperty(exports, "__esModule", {value: true});class IndexController {
    async index(req, res) {
        const appInfo = {
            name: process.env.npm_package_name,
            version: process.env.npm_package_version
        }

        res.json(appInfo);
    }
}

exports. default = new IndexController();
