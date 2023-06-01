import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const CartProductsItem = ({ id, name, price, imgUrl }: Props) => {
  const { dispatch }: any = useContext(ShoppingCartContext);
  const handleDecrease = () => {
    dispatch({
      type: "REMOVEFROMCART",
      payload: { id },
    });
  };
  return (
    <div className="card" style={{ width: "18rem" }} key={id}>
      <img
        src={imgUrl}
        className="card-img-top"
        alt="..."
        style={{ width: "100%", height: "300px" }}
      />
      <div className="card-body d-flex align-items-center justify-content-between fw-bold">
        <p className="card-text">{name}</p>
        <p className="card-text">{price}</p>
      </div>
      <button className="btn btn-danger w-full p-2" onClick={handleDecrease}>
        Remove From Cart
      </button>
    </div>
  );
};

export default CartProductsItem;
