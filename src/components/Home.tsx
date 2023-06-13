import { Container } from "react-bootstrap";
import Data from "../data/data.json";
import CardItem from "./CardItem";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CartProducts from "./CartProducts";

const Home = () => {
  const { openCart, cartItems }: any = useContext(ShoppingCartContext);
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center flex-wrap gap-4">
        {Data.map((ele) => {
          return (
            <div key={ele.id}>
              <CardItem {...ele} />
            </div>
          );
        })}
      </Container>
      {openCart && cartItems.length !== 0 && (
        <div
          className="text-dark position-absolute top-0 vh-100 end-0 w-50 p-3 shadow-lg overflow-scroll"
          style={{ backgroundColor: "antiquewhite" }}
        >
          <CartProducts />
        </div>
      )}
    </>
  );
};

export default Home;
