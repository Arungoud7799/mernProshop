import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useSelector } from "react-redux";

import logo from "../assets/logo.png";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);

  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={logo} alt="ProShop" />
              ProShop
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                  {cartItems.length > 0 && (
                    <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                </Nav.Link>
              </LinkContainer>

              <NavDropdown id="username">
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>

              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;


// Nan


// import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
// import { LinkContainer } from "react-router-bootstrap";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// // import { useLogoutMutation } from "../slices/usersApiSlice";
// // import { logout } from "../slices/authSlice";
// // import SearchBox from "./SearchBox";
// import logo from "../assets/logo.png";
// // import { resetCart } from "../slices/cartSlice";

// const Header = () => {
//   const { cartItems } = useSelector((state) => state.cart);
//   console.log(cartItems);

//   return (
//     <header>
//       <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
//         <Container>
//           <LinkContainer to="/">
//             <Navbar.Brand>
//               <img src={logo} alt="proShop" />
//               ProShop
//             </Navbar.Brand>
//           </LinkContainer>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <LinkContainer to="/cart">
//                 <Nav.Link>
//                   <FaShoppingCart /> Cart
//                   {cartItems.length > 0 && (
//                     <Badge pill bg="success" style={{ marginLeft: "5px" }}>
//                       {cartItems.reduce((a, c) => a + c.qty, 0)}
//                     </Badge>
//                   )}
//                 </Nav.Link>
//               </LinkContainer>
//               <LinkContainer to="signin">
//                 <Nav.Link>
//                   <FaUser /> Sign In
//                 </Nav.Link>
//               </LinkContainer>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// };

// export default Header;

// Now inside the Navbar I want a Container, [no audio] okay, just so the, you know, the inner elements of the Navbar don't stretch all the way to the edges of the browser.
