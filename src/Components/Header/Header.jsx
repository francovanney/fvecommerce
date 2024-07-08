import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/Dropdown";
import { FaShoppingCart } from "react-icons/fa";

const Header = ({ logOut }) => {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce Frvnn 🤑</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {/* Elementos de la izquierda */}
          </Nav>
          <Nav className="d-flex align-items-center">
            <Form className="d-flex mx-2">
              <FormControl
                type="search"
                placeholder="Buscar..."
                className="me-2"
                aria-label="Buscar"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
            <Nav.Link href="#">
              <FaShoppingCart className="me-2" />
              <p className="d-inline">Cart</p>
            </Nav.Link>
            <Dropdown align="end">
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                <Image
                  src="https://via.placeholder.com/40" // URL de la imagen de perfil
                  roundedCircle
                />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
