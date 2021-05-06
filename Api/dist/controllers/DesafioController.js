"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

class DesafioController {
    async index(req, res) {
        const url = 'https://api.github.com/orgs/takenet/repos';

        _axios2.default.get(url, {
            params: {
                sort: 'created',
                direction: 'asc',
            }
        }).then(data => {
            const repos = data.data;

            let quantity = 5;
            const reposFiltered = repos.filter(repo => {
                if (quantity > 0 && repo.language === 'C#') {
                    quantity--;
                    return true;
                }
            });

            return res.json(reposFiltered);
        }).catch(err => {
            return res.json([]);
        })
    }
}

exports. default = new DesafioController();
