import type { PhoneDetail } from '../models/phoneDetail';
import { createContext } from 'react';

export interface CartItem {
  id: string;
  phone: PhoneDetail;
  selectedColor: string;
  selectedStorage: string;
  price: number;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  total: number;
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string };

export interface CartContextType {
  cartState: CartState;
  // eslint-disable-next-line no-unused-vars
  addToCart: (item: Omit<CartItem, 'id' | 'price'>) => void;
  // eslint-disable-next-line no-unused-vars
  removeFromCart: (id: string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);
