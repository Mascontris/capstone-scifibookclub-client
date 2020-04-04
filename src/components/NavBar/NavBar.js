import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Hyph, Hamburger } from "../Utils/Utils";
import TokenService from '../../services/token-service'
import "./NavBar.css";
import ApplicationContext from "../Context/ApplicationContext";

export default class NavBar extends Component {
    
  static contextType = ApplicationContext;

  handleLogoutClick = () => {
      TokenService.clearAuthToken()
      localStorage.removeItem('user_id')
    }

  renderLogoutLink() {
    return (
      <li className="nav-links">
        <Link onClick={this.handleLogoutClick} 
          to="/">
          Logout
        </Link>
      </li>
    )
  }

  renderLoginLink() {
    return (
    <li className='nav-links'>
      <Link 
        to="/register">
          Register
      </Link>
      <Hyph />
      <Link 
      to="/login">
        Log in
      </Link>
    </li>
    )}

  renderBooks() {
    return (
      <li className="nav-links">
        <Link to="/books">Books</Link>
      </li>
    );
  }

  renderMyBookshelf() {
    return (
      <li className="nav-links">
        <Link to="/bookshelf">My Bookshelf</Link>
      </li>
    );
  }

  renderUsersPage() {
    return (
      <li className="nav-links">
        <Link to="/Users">User's List</Link>
      </li>
    );
  }

  render() {
    let mainNav = document.getElementById("js-menu");
    let bars = document.getElementById("fa-bars");

    function toggleHamburger(x) {
      x.classList.toggle("change");
    }

    return (
      <div className="container">
        <nav className="navbar">
          <span
            className="navbar-toggle"
            id="js-navbar-toggle"
            onClick={() => {
              mainNav.classList.toggle("active");
              toggleHamburger(bars);
            }}
          >
            <Hamburger id="fa-bars" className="fa-bars"></Hamburger>
          </span>
          <Link to="/" className="logo">
            SciFi Bookclub
          </Link>
          <ul
            className="main-nav"
            id="js-menu"
            onClick={() => {
              mainNav.classList.toggle("active");
              toggleHamburger(bars);
            }}
          >
            {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}

            {this.renderBooks()}

            {TokenService.hasAuthToken()
            ? this.renderMyBookshelf()
            : ""}
            
            {TokenService.hasAuthToken()
            ? this.renderUsersPage()
            : ""}

          </ul>
        </nav>
      </div>
    );
  }
}
