import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";

const CartItems = () => {
  const { cartItems, dispatch }: any = useContext(ShoppingCartContext);

  const handleClose = () => {
    dispatch({
      type: "CLOSECART",
    });
  };
  return (
    <div>
      <div className="d-flex align-items-end justify-content-between">
        <h5>Cart Items Are </h5>
        <button
          className="btn btn-outline-danger rounded-circle"
          onClick={handleClose}
        >
          x
        </button>
      </div>

      <div>
        {cartItems?.map((item: any) => {
          return <p> {item.name}</p>;
        })}
      </div>
    </div>
  );
};

export default CartItems;
