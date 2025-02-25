import { createContext, ReactNode, useContext } from 'react';
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

const CartContext = createContext({} as CartContextType);

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shoppingCart', []);

  const addProductToCart = (id: number) => {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id }];
      }
      return currItems;
    });
  };

  const removeProductFromCart = (id: number) => {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id);
    });
  };

  return (
    <CartContext.Provider
      value={{
        addProductToCart,
        removeProductFromCart,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
