import express, { type Request, type Response, type Router } from 'express';

export const router: Router = express.Router();

router.get('/favicon.ico', (req: Request, res: Response) => {
  res.setHeader('Content-Type', 'image/x-icon');
  res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
  res.setHeader('Cache-Control', 'public, max-age=31536000');
  res.status(200).send('');
});
