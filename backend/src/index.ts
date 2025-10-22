import cors from 'cors';
import dotenv from 'dotenv';
import express, {
  type NextFunction,
  type Request,
  type Response
} from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { router as faviconRoutes } from './routes/favicon.js';
import { router as productRoutes } from './routes/products.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: 'same-origin' }
  })
);
app.use(
  cors({
    origin: [process.env.CLIENT_URL || 'http://localhost:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'x-api-key']
  })
);
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', faviconRoutes);
app.use('/api', productRoutes);

app.use('*', (req: Request, res: Response) => {
  res.status(404).json({
    error: 'Route not found'
  });
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    error: 'Something went wrong!'
  });
});

app.listen(PORT);
