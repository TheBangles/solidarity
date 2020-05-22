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
            href="/"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              <img
                src="https://blog.ethereum.org/img/avatar-icon.png"
                alt="logo"
              />
            </a>

            <a className="navbar-item" href="/all">
              Ongoing Campaigns
            </a>
            {/* <a className="navbar-item" href="/search">
              Search
            </a> */}

            <a className="navbar-item" href="/finished">
              Successful Campaigns
            </a>

          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <Status {...props} />
          </div>
          <div className="navbar-item">
            <a className="button is-white is-outlined" href="/add">
              Create Campaign
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
