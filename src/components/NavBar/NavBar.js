import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Hyph, Hamburger } from '../Utils/Utils'
//import TokenService from '../../services/token-service'
//import IdleService from '../../services/idle-service'
import './NavBar.css'

export default class NavBar extends Component {
//   handleLogoutClick = () => {
//     TokenService.clearAuthToken()
//     /* when logging out, clear the callbacks to the refresh api and idle auto logout */
//     TokenService.clearCallbackBeforeExpiry()
//     IdleService.unRegisterIdleResets()
//   }


  renderLogoutLink() {
    return (
      <div className="nav-links">
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <li className="nav-links">
        <Link
          to='/register'>
          Register
        </Link>
        <Hyph />
        <Link
          to='/login'>
          Log in
        </Link>
      </li>
    )
  }

  renderBooks() {
    return (
        <li className="nav-links">
            <Link
              to='/books'>
                 Books
              </Link>
        </li>
    )
}

  renderMyBookshelf() {
      return (
          <li className="nav-links">
              <Link
                to='/bookshelf'>
                    My Bookshelf
                </Link>
          </li>
      )
  }

  renderUsersPage() {
    return (
        <li className="nav-links">
            <Link
              to='/Users'>
                 User's List
              </Link>
        </li>
    )
}



  render() {
    
    let mainNav = document.getElementById('js-menu');
    let bars = document.getElementById('fa-bars')

    function toggleHamburger(x) {
      x.classList.toggle("change");
    }

    return (
<nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle" onClick={() => {
                mainNav.classList.toggle('active')
                toggleHamburger(bars)
              }}>
            <Hamburger id='fa-bars' className='fa-bars'></Hamburger>
        </span>
        <Link to='/' className="logo">
          SciFi Bookclub
        </Link>
        <ul className="main-nav" id="js-menu" onClick={() => {
                mainNav.classList.toggle('active')
                toggleHamburger(bars)
              }}>         
          {this.renderLoginLink()}
            {/* {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()} */}
          {this.renderBooks()}
          {this.renderMyBookshelf()}
          {this.renderUsersPage()}
            
        </ul>
    </nav>
    )
  }
}