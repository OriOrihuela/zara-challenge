import express from 'express';
import { apiClient } from '../apiClient.js';

export const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const response = await apiClient.get('/products');
    const data = response.data;

    res.status(200).json({
      items: data,
      count: data.length
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});
