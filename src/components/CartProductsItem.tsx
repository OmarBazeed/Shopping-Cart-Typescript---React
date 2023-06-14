import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const CartProductsItem = ({ id, name, price, imgUrl }: Props) => {
  const { dispatch, cartItems }: any = useContext(ShoppingCartContext);
  const handleREMOVE = () => {
    dispatch({
      type: "REMOVEFROMCART",
      payload: { id },
    });
    cartItems.length === 1 && window.location.reload();
  };
  return (
    <div className="card p-1" key={id}>
      <img
        src={imgUrl}
        className="card-img-top max-w-300 min-h-200"
        alt="..."
      />
      <div className="card-body d-flex align-items-center justify-content-between fw-bold">
        <p className="card-text">{name}</p>
        <p className="card-text">{price}</p>
      </div>
      <button className="btn btn-danger w-full p-2" onClick={handleREMOVE}>
        Remove From Cart
      </button>
    </div>
  );
};

export default CartProductsItem;
