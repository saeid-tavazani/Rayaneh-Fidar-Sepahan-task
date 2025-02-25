import { createContext, ReactNode, useCallback, useContext } from 'react';
import { useLocalStorage } from '../hook/useLocalStorage';

type CartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
};

type CartContextType = {
  addProductToCart: (id: number) => void;
  removeProductFromCart: (id: number) => void;
  cartItems: CartItem[];
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCartContext = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shoppingCart', []);

  const addProductToCart = useCallback(
    (id: number) => {
      setCartItems(prevItems => {
        if (!prevItems.some(item => item.id === id)) {
          return [...prevItems, { id }];
        }
        return prevItems;
      });
    },
    [setCartItems],
  );

  const removeProductFromCart = useCallback(
    (id: number) => {
      setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    },
    [setCartItems],
  );

  return <CartContext.Provider value={{ addProductToCart, removeProductFromCart, cartItems }}>{children}</CartContext.Provider>;
};
