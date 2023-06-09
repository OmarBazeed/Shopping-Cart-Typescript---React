import { ReactNode, createContext, useReducer } from "react";
import { initialState, reducer } from "./reducer";

type ShoppingCartProviderProps = {
  children: ReactNode;
};
// type initialStateProps = {
//   cartItems: [];
//   openCart: boolean;
// };

export const ShoppingCartContext = createContext({});

const ShoppingCartProvider = ({ children }: ShoppingCartProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems: state.cartItems,
        dispatch,
        openCart: state.openCart,
        cartCount: state.cartCount,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
export default ShoppingCartProvider;
