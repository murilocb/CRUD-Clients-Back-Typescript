import express, { Router, Request, Response } from 'express';
import clientesController from '../controller/clientes';

const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
  clientesController.getAll(req, res);
});

router.post('/', (req: Request, res: Response) => {
  clientesController.create(req, res);
});

router.put('/:id', (req: Request, res: Response) => {
  clientesController.update(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
  clientesController.delete(req, res);
});

export default router;
