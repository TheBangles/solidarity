import React from 'react';

const MetaMask = (props) =>  {
  return (
    <div>
      <center>
        Please download <a href="https://metamask.io/"> MetaMask </a>  to use Solidarity
        <hr></hr>
        <li> Solidarity is a decentralized app that is built on top of the Ethereum blockchain. </li>
        <li> Donating or creating charity projects require users to submit transactions to the blockchain.</li>
        <li> MetaMask is available as a  browser extension that serves as a crypto wallet. </li>
        <li> It allows you to interact with our application by setting up your own accounts</li>
      </center>

      <div>
        <section id="home" className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-vcentered">
                <div className="column is-6">
                  <h1 className="title is-title is-size-1 has-text-weight-bold">
                    Welcome to Solidarity
                  </h1>

                  <p className="subtitle is-4 has-margin-top-20 is-family-primary">
                    Donate to charities with confidence using{" "}
                    <strong>SECURE</strong> and <strong>TRANSPARENT</strong>{" "}
                    blockchain technologies.
                  </p>
                  <a href="/all" className="has-text-centered">
                    <button className="button is-link">Donate Today</button>
                  </a>
                </div>
                <div className="column is-half">
                  <img
                    src="https://www.thepongofund.org/wp-content/uploads/2015/06/Quote-1898205_641455502599124_1991305080_n-FB-6-9-15.jpg"
                    alt="kids working together to rescue stranded dog out of river"
                  />
                </div>
              </div>
              <div className="columns is-vcentered">
                <div className="column is-half">
                  <img
                    src="https://btcmanager.com/wp-content/uploads/2018/11/7.-What-is-Truffle.jpg"
                    alt="truffle suite"
                  />
                </div>
                <div className="column is-6">
                  <h1 className="title is-title is-size-1 has-text-weight-bold">
                    About Us
                  </h1>

                  <p className="subtitle is-4 has-margin-top-20 is-family-primary">
                    Solidarity is a decentralized platform with a fully
                    transparent smart contract on the Ethereum blockchain that
                    allows people to donate a certain amount to a charity of
                    choice, which only gets sent if the charity's goal is met.
                    Solidarity guarantees 100% transparency as our smart
                    contract is fully open-source.
                  </p>
                  <a
                    href="https://github.com/TheBangles/solidarity"
                    className="has-text-centered"
                  >
                    <button className="button is-link">
                      Code with us at Solidarity
                    </button>
                  </a>

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    );
}

export default MetaMask
