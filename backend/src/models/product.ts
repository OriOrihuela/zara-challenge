export interface ProductQuery {
  search?: string;
  limit?: string;
  offset?: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  imageUrl: string;
  basePrice: number;
}
