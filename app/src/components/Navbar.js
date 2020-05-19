import React from 'react';
import Status from './Status';

const Navbar = (props) => {
  return (
    <div>
      <nav
        className="navbar is-fixed-top is-info"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <div className="navbar-item">
              <img src="https://blog.ethereum.org/img/avatar-icon.png" />
            </div>

            <div className="navbar-item">Solidarity</div>

            <a className="navbar-item" href="/">
              Home
            </a>

            <a className="navbar-item" href="/all">
              Donate
            </a>

            <a className="navbar-item" href="/add">
              Create
            </a>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Status {...props} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
