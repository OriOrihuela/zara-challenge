import type { PropsWithChildren } from 'react';
import { useCallback, useReducer } from 'react';
import { v4 } from 'uuid';
import {
  type CartAction,
  CartContext,
  type CartItem,
  type CartState
} from './CartContext';

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
  case 'ADD_ITEM': {
    const newItems = [...state.items, action.payload];
    return {
      items: newItems,
      total: calculateTotal(newItems)
    };
  }

  case 'REMOVE_ITEM': {
    const filteredItems = state.items.filter(
      item => item.id !== action.payload
    );
    return {
      items: filteredItems,
      total: calculateTotal(filteredItems)
    };
  }

  default:
    return state;
  }
};

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    items: [],
    total: 0
  });

  const addToCart = useCallback((item: Omit<CartItem, 'id' | 'price'>) => {
    const selectedStorageOption = item.phone.storageOptions.find(
      s => s.capacity === item.selectedStorage
    );
    const price = selectedStorageOption
      ? selectedStorageOption.price
      : item.phone.basePrice;

    const cartItem: CartItem = {
      ...item,
      id: v4(),
      price
    };

    dispatch({ type: 'ADD_ITEM', payload: cartItem });
  }, []);

  const removeFromCart = useCallback(
    (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
    []
  );

  return (
    <CartContext.Provider
      value={{
        cartState,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
