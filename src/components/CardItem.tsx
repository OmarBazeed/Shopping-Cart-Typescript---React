import { useContext, useState } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

type Props = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

const CardItem = ({ id, name, price, imgUrl }: Props) => {
  const { dispatch }: any = useContext(ShoppingCartContext);
  const [value, setValue] = useState(0);

  const handleIncrease = () => {
    dispatch({
      type: "ADDTOCART",
      payload: { id, name, price, imgUrl },
    });
    setValue(value + 1);
  };
  const handleDecrease = () => {
    dispatch({
      type: "REMOVEFROMCART",
      payload: { id },
    });
    value !== 0 && setValue(value - 1);
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
      <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
        <button className="btn btn-outline-primary" onClick={handleDecrease}>
          -
        </button>
        <p className="mb-0"> {value} </p>
        <button className="btn btn-outline-danger" onClick={handleIncrease}>
          +
        </button>
      </div>
    </div>
  );
};

export default CardItem;
