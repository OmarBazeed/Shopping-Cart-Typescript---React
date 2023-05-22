import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="text-center ">
        <h1 className="font-bold text-danger text-center underline">
          Hello In The Shopping Cart Built With React And typescript
        </h1>
        <button
          className="btn font-monospace text-bg-dark text-center text-uppercase m-auto d-block my-5 p-3 text-info"
          onClick={handleClick}
        >
          click here 😉
        </button>
        <Link to="/about">Go About</Link>
      </div>
      <Routes>
        <Route path="/about" element={<About name="omar" />} />
      </Routes>
    </>
  );
}

export default App;
