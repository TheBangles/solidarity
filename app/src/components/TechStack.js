import React from "react";

const TechStack = () => {
  return (

      <div class="content-wrapper">
        <div class="columns">
          <div class="column is-one-third">
            <div class="feature-card is-bordered has-text-centered revealOnScroll delay-1" data-animation="fadeInLeft">
              <div class="card-title">
                <h4>Pixel perfect</h4>
              </div>
              <div class="card-icon">
                <img
                  alt="AppSeed App Generator Logo." class="lazy"
                  data-src="assets/images/illustrations/icons/mouse-globe.svg"/>
              </div>
              <div class="card-text">
                <p>Flexbox based. Mobile First layout, small footprint</p>
              </div>
              <div class="card-action">
                <a target="_blank" href="" class="button btn-align-md accent-btn raised">Get Code</a>
              </div>
            </div>
          </div>

        <div class="column">
          <div class="feature-card is-bordered has-text-centered revealOnScroll delay-2" data-animation="fadeInLeft">
            <div class="card-title">
              <h4>Tooling</h4>
            </div>
            <div class="card-icon">
              <img class="lazy" data-src="assets/images/illustrations/icons/laptop-cloud.svg"/>
            </div>
            <div class="card-text">
              <p>Generated with Panini Static Generator. Gulp Scripts</p>
            </div>
            <div class="card-action">
              <a target="_blank" href="" class="button btn-align-md secondary-btn raised">Read More</a>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="feature-card is-bordered has-text-centered revealOnScroll delay-3" data-animation="fadeInLeft">
            <div class="card-title">
              <h4>Documented</h4>
            </div>
            <div class="card-icon">
              <img class="lazy" data-src="assets/images/illustrations/icons/plug-cloud.svg"/>
            </div>
            <div class="card-text">
              <p>Read More about JAMStack and Bulma Css on our blog</p>
            </div>
            <div class="card-action">
              <a target="_blank" href="https://blog.appseed.us" class="button btn-align-md primary-btn raised">Read More</a>
            </div>
          </div>
        </div>
      </div>


  );
};

export default TechStack;
