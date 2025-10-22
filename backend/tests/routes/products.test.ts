import express from 'express';
import request from 'supertest';
import { Product } from '../../src/models/product';
import { router as productRoutes } from '../../src/routes/products';

const app = express();
app.use(express.json());
app.use('/api', productRoutes);

describe('Products API Routes', () => {
  describe('GET /api/products', () => {
    it('should return products with default pagination', async () => {
      const response = await request(app).get('/api/products').expect(200);

      expect(response.body).toHaveProperty('items');
      expect(response.body).toHaveProperty('total');
      expect(Array.isArray(response.body.items)).toBe(true);
    });

    it('should return products with custom pagination', async () => {
      const response = await request(app)
        .get('/api/products?limit=5&offset=0')
        .expect(200);

      expect(response.body).toHaveProperty('items');
      expect(response.body).toHaveProperty('total');
      expect(response.body.items.length).toBeLessThanOrEqual(5);
    });

    it('should filter products by search query', async () => {
      const response = await request(app)
        .get('/api/products?search=iPhone')
        .expect(200);

      expect(response.body).toHaveProperty('items');
      expect(response.body).toHaveProperty('total');

      response.body.items.forEach((item: Product) => {
        const name = item.name?.toLowerCase() || '';
        const brand = item.brand?.toLowerCase() || '';
        expect(name.includes('iphone') || brand.includes('iphone')).toBe(true);
      });
    });

    it('should handle empty search results', async () => {
      const response = await request(app)
        .get('/api/products?search=nonexistentproduct')
        .expect(200);

      expect(response.body).toHaveProperty('items');
      expect(response.body).toHaveProperty('total');
      expect(response.body.items).toHaveLength(0);
    });

    it('should handle invalid pagination parameters gracefully', async () => {
      const response = await request(app)
        .get('/api/products?limit=invalid&offset=invalid')
        .expect(200);

      expect(response.body).toHaveProperty('items');
      expect(response.body).toHaveProperty('total');
    });
  });

  describe('GET /api/products/:id', () => {
    it('should return a specific product by ID', async () => {
      const allProductsResponse = await request(app)
        .get('/api/products')
        .expect(200);

      if (allProductsResponse.body.items.length > 0) {
        const firstProduct = allProductsResponse.body.items[0];
        const response = await request(app)
          .get(`/api/products/${firstProduct.id}`)
          .expect(200);

        expect(response.body).toHaveProperty('id', firstProduct.id);
        expect(response.body).toHaveProperty('name');
        expect(response.body).toHaveProperty('brand');
      }
    });

    it('should return 500 for invalid product ID', async () => {
      const response = await request(app)
        .get('/api/products/invalid-id')
        .expect(500);

      expect(response.body).toHaveProperty('error');
    });
  });
});
