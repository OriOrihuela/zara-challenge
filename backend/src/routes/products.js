import express from 'express';
import { apiClient } from '../apiClient.js';

export const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const response = await apiClient.get('/products');
    let data = response.data;

    if (req.query.search) {
      const searchQuery = req.query.search.toLowerCase();
      data = data.filter(phone => {
        const name = phone.name?.toLowerCase() || '';
        const brand = phone.brand?.toLowerCase() || '';
        return name.includes(searchQuery) || brand.includes(searchQuery);
      });
    }

    const limit = parseInt(req.query.limit) || 20;
    const offset = parseInt(req.query.offset) || 0;

    const paginatedData = data.slice(offset, offset + limit);

    res.status(200).json({
      items: paginatedData,
      total: paginatedData.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/products/:id', async (req, res) => {
  try {
    const response = await apiClient.get(`/products/${req.params.id}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
