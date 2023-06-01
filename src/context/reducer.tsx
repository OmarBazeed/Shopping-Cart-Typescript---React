// type initialStateProps = {
//   cartItems: [];
//   openCart: boolean;
// };
// type actionProps = {
//   type: string;
//   payload: {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
//   };
// };

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type actionProps = {
  type: string;
  payload: {
    name: string;
    id: number;
    imgURL: string;
    price: number;
  };
};
const initialState: any = {
  cartItems: [],
  openCart: false,
  cartCount: 0,
};

const reducer = (state = initialState, action: actionProps) => {
  switch (action.type) {
    case "ADDTOCART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        cartCount: state.cartCount + 1,
      };
    case "REMOVEFROMCART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item: CartItemProps) => item.id !== action.payload.id
        ),
        cartCount: state.cartCount > 0 ? state.cartCount - 1 : 0,
      };
    case "OPENCART":
      return {
        ...state,
        openCart: true,
      };
    case "CLOSECART":
      return {
        ...state,
        openCart: false,
      };
    default:
      return state;
  }
};
export { initialState, reducer };
