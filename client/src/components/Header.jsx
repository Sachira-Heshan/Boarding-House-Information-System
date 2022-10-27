import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

function Header(props) {
  const { currentUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Boarding Houses</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/boardings">Boardings</Nav.Link>
              <Nav.Link href="/owners">Owners</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <span>{currentUser?.username}</span>
            <Nav>
              {currentUser ? (
                <Nav.Link
                  className="fw-light fst-italic text-decoration-underline"
                  href="/user"
                >
                  {currentUser.username}
                </Nav.Link>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
              {currentUser ? (
                <Nav.Link>
                  <span
                    onClick={() => {
                      logout();
                      navigate("/");
                    }}
                  >
                    Logout
                  </span>
                </Nav.Link>
              ) : (
                <Nav.Link href="/signup">Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {props.children}
    </>
  );
}

export default Header;
