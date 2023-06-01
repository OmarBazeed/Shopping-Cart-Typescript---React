import { ShoppingCartContext } from "../context/ShoppingCartContext";
import { useContext } from "react";
import CartProductsItem from "./CartProductsItem";

const CartProducts = () => {
  const { cartItems, dispatch }: any = useContext(ShoppingCartContext);

  const handleClose = () => {
    dispatch({
      type: "CLOSECART",
    });
  };
  return (
    <div>
      <div className="d-flex align-items-end justify-content-between">
        <h5 className="text-uppercase font-monospace text-primary fw-bolder">
          Cart Items Are
        </h5>
        <button
          className="btn  rounded-circle fs-3"
          onClick={handleClose}
          style={{ transform: "translate-x-(180)" }}
        >
          🏃
        </button>
      </div>
      <hr />
      <div>
        {cartItems?.map((item: any) => {
          return <CartProductsItem {...item} />;
        })}
      </div>
    </div>
  );
};

export default CartProducts;
