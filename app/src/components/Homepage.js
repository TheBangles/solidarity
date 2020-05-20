import React, { Component } from 'react';
import '../App.css';
import Trendings from './Trendings';

export default class Homepage extends Component {


  render() {
    return (
      <div>
        <section id="home" class="hero is-medium">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-vcentered">
                <div class="column is-6">
                  <h1 class="title is-title is-size-1 has-text-weight-bold">
                    Welcome to Solidarity
                  </h1>

                  <p class="subtitle is-4 has-margin-top-20 is-family-primary">
                    Donate to Chairties with confidence using SECURE and
                    TRANSPARENT blockchain network.
                  </p>
                </div>
                <div class="column is-5 has-text-centered">
                 <img
                    src="https://www.thepongofund.org/wp-content/uploads/2015/06/Quote-1898205_641455502599124_1991305080_n-FB-6-9-15.jpg"
                    alt="kids working together to rescue stranded dog out of river"
                  />

                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );}}


      {/* // <div class="container">
      //   <div class="notification"> */}


            {/* <span className="title">

            Welcome to Solidarity
            </span>
            <span>Donate to Chairties with confidence using SECURE and TRANSPARENT blockchain network.</span>

          <div className="text">
            Solidarity is a decentralized platform with a fully transparent
            smart contract on the Ethereum blockchain that allows people to
            donate a certain amount to a charity of choice, which only gets sent
            if the charity's goal is met. Solidarity guarantees 100%
            transparency as our smart contract is fully open-source.
          </div>
          <div class="image">
            <img
              src="https://www.thepongofund.org/wp-content/uploads/2015/06/Quote-1898205_641455502599124_1991305080_n-FB-6-9-15.jpg"
              alt="kids working together to rescue stranded dog out of river"
            />
          </div> */}

          {/* <div>
            <div className="trending" id="trending">
              Trending Projects
            </div>
            <Trendings {...this.props} />
          </div> */}
      //   </div>
      // </div>

      //   <div>
      //     <div className='impacts' id='impacts'>Solidarity by the numbers / impacts</div>
      //   </div>



