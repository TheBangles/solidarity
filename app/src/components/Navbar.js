import React from 'react';

const image = "https://blog.ethereum.org/img/avatar-icon.png"

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar is-fixed-top is-dark"
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

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
              <img src={image} />
            </div>

            <div class="navbar-item">
              Solidarity
            </div>

            <a class="navbar-item" href="/">
              Home
            </a>

            <a class="navbar-item" href="/all">
              Donate
            </a>

            <a className="navbar-item" href="/add">
              Create
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
