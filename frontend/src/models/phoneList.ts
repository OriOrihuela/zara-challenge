export interface Phone {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
}

export interface PhonesResponse {
  items: Phone[];
  total: number;
}
