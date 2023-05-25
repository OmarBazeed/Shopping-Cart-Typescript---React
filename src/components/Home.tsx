import { Container } from "react-bootstrap";
import Data from "../data/data.json";
import CardItem from "./CardItem";

const Home = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center flex-wrap gap-4">
      {Data.map((ele) => {
        return <CardItem {...ele} />;
      })}
    </Container>
  );
};

export default Home;
