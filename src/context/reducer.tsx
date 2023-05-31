// type CartItemProps = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// };
// type initialStateProps = {
//   cartItems: [];
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

const initialState: any = {
  cartItems: [],
  openCart: false,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADDTOCART":
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    case "REMOVEFROMCART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item: any) => item.id !== action.payload.id
        ),
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
