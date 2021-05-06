import { Router } from 'express';
import desafioController from '../controllers/DesafioController';

const router = new Router();

router.get('/', desafioController.index);

export default router;
