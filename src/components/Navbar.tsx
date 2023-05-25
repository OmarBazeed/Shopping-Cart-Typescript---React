import { useEffect } from "react";
import { Container, Nav, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";

type Props = {
  name?: string;
};

const Navbar = (props: Props) => {
  useEffect(() => {
    const elements = document.querySelectorAll(".linkNav");
    elements.forEach((el) => {
      el.addEventListener("click", () => {
        elements.forEach((ele) => {
          ele.classList.remove("active");
        });
        el.classList.add("active");
      });
    });
  }, []);

  return (
    <NavbarBrand className="position-relative">
      <Container className="shadow-sm mb-3 p-3 d-flex align-items-center justify-content-between ">
        <Nav>
          <Nav.Link
            as={Link}
            className="text-primary linkNav me-1 fw-bold fs-5 font-monospace active"
            to="/"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            className="text-primary linkNav me-1 fw-bold fs-5 font-monospace"
            to="/store"
          >
            Store
          </Nav.Link>
          <Nav.Link
            as={Link}
            className="text-primary linkNav me-1 fw-bold fs-5 font-monospace"
            to="/about"
          >
            About
          </Nav.Link>
        </Nav>
        <button className="btn btn-outline-primary rounded-circle d-flex align-items-center justify-content-center position-relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="currentColor"
            width={25}
            height={25}
          >
            <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
          </svg>
          <div className="position-absolute top-100 start-100 translate-middle text-light   rounded-circle text-bg-danger border  border-light h-75 d-flex align-items-center justify-content-center p-2">
            3
          </div>
        </button>
      </Container>
      {/* <div className="position-absolute top-0 end-0 vh-100 w-50 bg-dark text-light">
        here is some cart info
      </div> */}
    </NavbarBrand>
  );
};

export default Navbar;
