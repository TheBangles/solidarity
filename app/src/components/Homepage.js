import React, { Component } from 'react';
import '../App.css';
import Trendings from './Trendings';

export default class Homepage extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="container">
        <div class="notification">
          <span className="title">
            {' '}
            Solidarity: A combination of Solidity and Charities
          </span>
          <span></span>
          <div className="text">
            Solidarity is a decentralized platform with a fully transparent
            smart contract on the Ethereum blockchain that allows people to
            donate a certain amount to a charity of choice, which only gets sent
            if the charity's goal is met. Solidarity guarantees 100%
            transparency as our smart contract is fully open-source.
          </div>
          <div class="image">
            <img src="https://www.thepongofund.org/wp-content/uploads/2015/06/Quote-1898205_641455502599124_1991305080_n-FB-6-9-15.jpg" />
          </div>
        </div>
      </div>

      // <div>
      //   <div>
      //     <div className='home'>
      //       <div className='homeName' id='homeName'> Solidarity </div>
      //       <div className="herf">
      //         <a href="#about-title"> About </a>
      //         <a href="#home-learn-more"> Learn More About Us </a>
      //         <a href="#trending"> Trending Projects </a>
      //         <a href="#impacts"> Impacts </a>
      //         <a href="#social"> Social </a>
      //       </div>
      //     </div>
      //   </div>

      //   <div className='about' id='about'>
      //     <h1 className='about-title' id='about-title'> About Solidarity </h1> <br/>
      //     <div className='container'>
      //       <div className='homeImage'>
      //       <img src='https://pics.awwmemes.com/no-act-of-kindness-no-matter-how-small-is-ever-31510453.png' />
      //       </div>
      //       <div className='container2'>
      //           <div>
      //             Solidarity is an international charity and educational partner. Our organization is unique in that it operates collaborative programs both domestically and internationally. In the US, Canada, and the UK, WE Day and WE Schools are initiatives of Solidarity that educate and empower young people. WE Schools is a year-long service-learning program that nurtures compassion in students and gives them the tools to create transformative social change. And WE Day is a series of inspiring events that celebrate youth making a difference in their local and global communities.
      //           </div>
      //           <br/>
      //           <div>
      //             In Africa, Asia and Latin America, we partner with communities to implement WE Villages, a holistic, five-pillar international development model designed to achieve sustainable change. Together with local leaders and families, we transform lives with solutions that are adaptive, effective and sustained long term by the community itself.
      //           </div>
      //       </div>
      //     </div>
      //   </div>

      //   <div className='home-learn-more' id='home-learn-more'> Learn More About Us </div>

      //   <div>
      //     <div className='trending' id='trending'>Trending Projects</div>
      //     <Trendings {...this.props} />
      //   </div>

      //   <div>
      //     <div className='impacts' id='impacts'>Solidarity by the numbers / impacts</div>
      //   </div>

      //   <div className='social' id='social'>
      //     <div>Checkout Our Social Media</div>
      //       <a href='https://www.facebook.com/WEmovement/'>
      //         <div className='socialImg'>
      //           <img src='https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png' width='50px'></img>
      //         </div>
      //       </a >
      //     <div>© Solidarity, 2020. All Rights Reserved.</div>
      //   </div>
      // </div>
    );
  }
}

/*
- change social media href link later
*/
