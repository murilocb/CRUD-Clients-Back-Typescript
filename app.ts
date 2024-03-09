import express from 'express';
import dotenv from 'dotenv';
import routes from './api/routes';

dotenv.config();

const app = express();
const PORTA = process.env.PORTA || 3000;

app.use(express.json());
app.use(routes);

app.listen(PORTA, () => {
  console.log(`API rodando na porta ${PORTA}`);
});

export default app;
