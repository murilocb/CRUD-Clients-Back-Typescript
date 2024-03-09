import { Router, Request, Response } from 'express';
import clientesRoutes from './clientes';

const router = Router();

router.use('/clientes', clientesRoutes);

router.use('*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'Not found' });
});

export default router;
