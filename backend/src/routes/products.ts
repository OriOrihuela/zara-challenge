import express, { type Request, type Response, type Router } from 'express';
import { apiClient } from '../apiClient.js';
import { type ProductQuery, type Product } from '../models/product.js';

export const router: Router = express.Router();

router.get(
  '/products',
  async (req: Request<{}, {}, {}, ProductQuery>, res: Response) => {
    try {
      const response = await apiClient.get('/products');
      let data: Product[] = response.data;

      if (req.query.search) {
        const searchQuery = req.query.search.toLowerCase();
        data = data.filter(phone => {
          const name = phone.name?.toLowerCase() || '';
          const brand = phone.brand?.toLowerCase() || '';
          return name.includes(searchQuery) || brand.includes(searchQuery);
        });
      }

      const limit = parseInt(req.query.limit || '20');
      const offset = parseInt(req.query.offset || '0');

      const paginatedData = data.slice(offset, offset + limit);

      res.status(200).json({
        items: paginatedData,
        total: paginatedData.length
      });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
);

router.get(
  '/products/:id',
  async (req: Request<{ id: string }>, res: Response) => {
    try {
      const response = await apiClient.get(`/products/${req.params.id}`);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
);
