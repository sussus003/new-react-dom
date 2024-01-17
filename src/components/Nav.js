import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
    <div>Hello</div>
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
