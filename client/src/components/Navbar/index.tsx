import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../img/logo.svg";
import { Link } from "react-router-dom";
import "./Navbar.css";

function NavbarUser() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <Link className="Link" to="/create">
            Crear Usuario
          </Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export { NavbarUser };
