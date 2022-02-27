import { faBars, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../media/images/logo.png";
import "./styles/style.css";

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      switcher: false,
    };
    this.handleSwitcher = this.handleSwitcher.bind(this);
  }

  handleSwitcher() {
    const { switcher } = this.state;
    this.setState({
      switcher: !switcher,
    });
    const barList = document.querySelector(".myListTwo");
    if (switcher === false) {
      barList.classList.add("active");
    } else {
      barList.classList.remove("active");
    }
  }

  render() {
    return (
      <section onScroll={this.handleSwitcher} className="navBar">
        <div className="container">
          <div className="logoContainer">
            <img src={logo} alt="" />
          </div>
          <div className="leftSide">
            <ul className="myListOne">
              <li>
                <a className="icon icon-comment" href="/Contact.js">
                  <FontAwesomeIcon icon={faComment} />
                </a>
              </li>
            </ul>
            <ul className="myListTwo">
              <li>
                <NavLink className="link signUp" to="/SignUp.js">
                  Sing up
                </NavLink>
              </li>
              <li>
                <NavLink className="link link-aboutUs" to="/About.js">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="link link-contact" to="/Contact.js">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="link link-home" to="/Home.js">
                  Home
                </NavLink>
              </li>
            </ul>
            <div className="iconContainer" onClick={this.handleSwitcher}>
              <FontAwesomeIcon icon={faBars} className="icon icon-bar" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Nav;
