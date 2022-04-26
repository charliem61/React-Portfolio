import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavLink,
  NavItem,
  NavbarText,
} from "reactstrap";

function Navigation(props){

function clickHandler(event) {
  const page = event.target.id;
  props.setRenderPage(page);
}
  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Mason Walker</NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={clickHandler} id="About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={clickHandler} id="Portfolio">
                Portfolio
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={clickHandler} id="Contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Full Stack MERN Developer</NavbarText>
        </Collapse>
      </Navbar>
          </div>
  );
}
export default Navigation;

// import img from "../assets/img"
