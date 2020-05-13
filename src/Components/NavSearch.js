import React from "react";
import "./NavSearch.css";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";
import { handleChange, openCartModal } from "../Redux/action";
import { connect } from "react-redux";
import Cart from "./Cart";
import { FaShoppingCart, FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavSearch(props) {
  return (
    <div className="navserachbar">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to="/">
            <FaOpencart size="2.750rem" style={{ marginRight: "10px" }} />
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/">
            <Navbar.Text className="navbar-content">Home</Navbar.Text>
          </Link>
          <Link to="/aboutus">
            <Navbar.Text className="navbar-content">About us</Navbar.Text>
          </Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={props.input}
            onChange={(event) => props.handleChange(event)}
          />
        </Form>
        <FaShoppingCart
          size="1.750rem"
          color="white"
          onClick={() => props.openCartModal(props.isOpenModal)}
        />
        <Cart />
      </Navbar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  input: state.input,
  isOpenModal: state.isOpenModal,
});
const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (payload) => dispatch(handleChange(payload)),
    openCartModal: (payload) => dispatch(openCartModal(payload)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NavSearch);
