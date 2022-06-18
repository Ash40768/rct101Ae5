import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const { cartItemsCount } = useContext(CartContext);
  const navigate = useNavigate();
  const handleLogin = () => {
    // login screen
    if (isAuth) {
      logout();
    
    } else {
   
      navigate("/login");
    }
  };
  return (
    <div
      
      style={{
        padding: "10px",
        display: "flex",
        gap: "20px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex"
        }}
      >
        <Link  to="/">
          Logo
        </Link>
      </div>
      <div
        style={{
          display: "flex"
        }}
      >
        <div >
          Cart: {cartItemsCount && `(${cartItemsCount})`}
        </div>
        <button  onClick={handleLogin}>
          {isAuth ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
