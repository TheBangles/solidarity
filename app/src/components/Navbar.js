import React from 'react'
import {Link} from 'react-router-dom'

// const Navbar = () => (
//   <div>
//     <nav>
//       <div>
//         {/* <Link to="/login"> Login </Link> */}
//         <Link to="/"> Solidarity </Link>
//         <Link to="/all"> AllProject </Link>
//         <Link to="/add"> Create Your Own Project </Link>
//       </div>

//     </nav>
//   </div>
// )

// export default Navbar;

const Navbar = () => {
  return (
    <div>
      <nav class="navbar is-fixed-top is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="/">
              Solidarity
            </a>

            <a class="navbar-item" href="/all">
              All Projects
            </a>

            <a class="navbar-item" href="/add">
              Create Charity Project
            </a>

            {/*
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a> */}

              {/* <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider"/>
                <a class="navbar-item">
                  Report an issue
                </a>
              </div> */}
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                {/* <a class="button is-primary">
                  <strong>Sign up</strong> */}
                {/* </a> */}
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          {/* </div> */}
        </div>
      </nav>
    </div>
  )
}

export default Navbar;

