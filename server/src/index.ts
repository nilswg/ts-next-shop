import express from 'express';
import cors from 'cors';
import { PORT } from './config';
import pongRoutes from './routes/pong';

// rest of the code remains same
const app = express();

app.use(cors());

app.get('/', (req, res) => res.send('Express + TypeScript Server 🚀'));

app.use('/api/ping', pongRoutes)

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});