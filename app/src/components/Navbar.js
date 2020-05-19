import React from 'react';

const Navbar = (props) => {
  // console.log('props', props);
  // console.log(
  //   'bool',
  //   // props.drizzle.contracts.Donate.methods.isCharity().call()
  //   props.drizzle.contracts.Donate.methods
  //     .isCharity()
  //     .call()
  //     .then((bool) => (bool ? 'Charity' : 'Donor'))
  // );

  const status = props.drizzle.contracts.Donate.methods
    .isCharity()
    .call()
    .then((bool) => (bool ? 'Charity' : 'Donor'));
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

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <div class="navbar-item">
              <img src="https://blog.ethereum.org/img/avatar-icon.png" />
            </div>

            <div class="navbar-item">Solidarity</div>

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
        <div class="navbar-end">
          <div class="navbar-item">
            Status:{status}
            {/* {props.drizzle.contracts.Donate.methods.isCharity().call()
              ? 'Charity'
              : 'Donor'} */}
            {/* {props.drizzle.contracts.Donate.methods
              .isCharity()
              .call()
              .then((bool) => (bool ? 'Charity' : 'Donor'))} */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
