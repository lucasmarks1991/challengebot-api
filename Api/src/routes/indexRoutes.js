import { Router } from 'express';
import indexController from '../controllers/IndexController';

const router = new Router();

router.get('/', indexController.index);

export default router;
