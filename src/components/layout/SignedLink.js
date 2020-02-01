import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class SignedLink extends Component {
  render() {
    return (
      <ul className="right">
        <li>
          <NavLink to="/CreateTips">Tips News</NavLink>
        </li>
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
        <li>
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            MM
          </NavLink>
        </li>
      </ul>
    );
  }
}
