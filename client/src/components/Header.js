import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        <button>Home</button>
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          <button>Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
