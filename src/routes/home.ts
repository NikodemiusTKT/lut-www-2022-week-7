import express, { Request, Response } from 'express';

export const router = express.Router();

router.get('/hello', (req: Request, res: Response) => {
  res.send('Hello world');
});
