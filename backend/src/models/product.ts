export interface QueryParams {
  search?: string;
  limit?: string;
  offset?: string;
}

export interface ColorOption {
  name: string;
  hexCode: string;
  imageUrl: string;
}

export interface StorageOption {
  capacity: string;
  price: number;
}

export interface Specifications {
  screen: string;
  resolution: string;
  processor: string;
  mainCamera: string;
  selfieCamera: string;
  battery: string;
  os: string;
  screenRefreshRate: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  basePrice: number;
  imageUrl: string;
  description: string;
  colorOptions: ColorOption[];
  storageOptions: StorageOption[];
  specs: Specifications;
  similarProducts: Product[];
}
