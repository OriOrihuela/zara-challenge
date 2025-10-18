import express from 'express';
import { apiClient } from '../apiClient.js';

export const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    const response = await apiClient.get('/products', {
      params: req.query
    });
    const data = response.data;

    res.status(200).json({
      items: data,
      total: data.length
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
