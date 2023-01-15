import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { router as indexRouter } from './routes/home';
import { router as vehicleRouter } from './routes/vehicles';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.use('/', indexRouter);
app.use('/vehicle', vehicleRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
