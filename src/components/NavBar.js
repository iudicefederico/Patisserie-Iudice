import * as ReactBootStrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <ReactBootStrap.Navbar bg="dark" variant="dark">
        <ReactBootStrap.Container>
          <ReactBootStrap.Nav className="me-auto">
            <Link to="/" className="navbar__link">
              PATISSERIE IUDICE
            </Link>
            <Link to="/category/:id" className="navbar__link">
              COMPRAR
            </Link>
            <ReactBootStrap.NavDropdown
              title={<span className="navbar__link__detalle">DETALLE</span>}
              id="basic-nav-dropdown"
              className="grid">
              <Link
                to="/item-category-detail/rolls"
                className="navbar__link dropdown-item">
                Rolls
              </Link>
              <Link
                to="/item-category-detail/muffins"
                className="navbar__link dropdown-item">
                Muffins
              </Link>
              <Link
                to="/item-category-detail/cookies"
                className="navbar__link dropdown-item">
                Cookies
              </Link>
            </ReactBootStrap.NavDropdown>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
      <Link to="/cart" className="navbar__link">
        <CartWidget />
      </Link>
    </div>
  );
}
