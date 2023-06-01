import { Container } from "react-bootstrap";
import Data from "../data/data.json";
import CardItem from "./CardItem";
import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";
import CartProducts from "./CartProducts";

const Home = () => {
  const { openCart }: any = useContext(ShoppingCartContext);
  return (
    <>
      <Container className="d-flex align-items-center justify-content-center flex-wrap gap-4">
        {Data.map((ele) => {
          return <CardItem {...ele} />;
        })}
      </Container>
      {openCart && (
        <div className="bg-white text-dark position-absolute top-0 h-100 end-0 w-50 p-3 shadow-lg">
          <CartProducts />
        </div>
      )}
    </>
  );
};

export default Home;
