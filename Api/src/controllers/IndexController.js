class IndexController {
    async index(req, res) {
        const appInfo = {
            name: process.env.npm_package_name,
            version: process.env.npm_package_version
        }

        res.json(appInfo);
    }
}

export default new IndexController();
