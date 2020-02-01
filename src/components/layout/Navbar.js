import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignedLink from "./SignedLink";
import SignedOutLink from "./SignedOutLink";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="nav-wrapper grey darken-2">
        <div className="">
          <Link to="/" className="brand-logo left">
            TIPS
          </Link>
          <SignedLink />
          <SignedOutLink />
        </div>
      </nav>
    );
  }
}
