import request from 'supertest';
import express from 'express';
import { router as faviconRoutes } from '../../src/routes/favicon';

const app = express();
app.use('/', faviconRoutes);

describe('Favicon API Routes', () => {
  describe('GET /favicon.ico', () => {
    it('should return favicon with correct headers', async () => {
      const response = await request(app).get('/favicon.ico').expect(200);

      expect(response.headers['content-type']).toContain('image/x-icon');
      expect(response.headers['cross-origin-resource-policy']).toBe(
        'cross-origin'
      );
      expect(response.headers['cache-control']).toBe(
        'public, max-age=31536000'
      );
    });

    it('should return empty response body', async () => {
      const response = await request(app).get('/favicon.ico').expect(200);

      expect(response.text).toBeUndefined();
    });
  });
});
