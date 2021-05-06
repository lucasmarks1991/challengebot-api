import axios from 'axios';

class DesafioController {
    async index(req, res) {
        const url = 'https://api.github.com/orgs/takenet/repos';

        axios.get(url, {
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

export default new DesafioController();
