import React from 'react';
import { useToasts } from 'react-toast-notifications';
const convert = require('ether-converter');

const SingleProjectForm = (props) => {
  const {
    handleChange,
    handleSubmit,
    state: { singleProject, amount },
  } = props;
  const { addToast } = useToasts();

  const onSubmit = async (e) => {
    e.preventDefault();
    const toast = await handleSubmit();
    toast
      ? addToast('Donation successful!', { appearance: 'success' })
      : addToast('Donation failed!', { appearance: 'error' });
  };

  return (
    <div className="content">
      <br></br>
      {/* <div className="notification"> */}
      <div class="columns">
        <div class="column is-two-thirds" id="first-column">
          <h2 className="single-title" >{singleProject[2]}</h2>
          <img  className="image is-200x200" src={singleProject[7]} alt="project" id="single-image"/>
          <progress
        className="progress is-link"
        value={singleProject[5]}
        max={singleProject[4]}
      />
          <p id="about"><strong> About: </strong>{singleProject[3]}</p>
        </div>
      <div class="column is-one-third" id="second-column">
        <form onSubmit={onSubmit}>
          {/* Amount to Donate */}
          <div className="field">
          <p> <strong> Goal (ether): </strong> {convert(singleProject[4], 'wei').ether}</p>
          <p> <strong>Contributions (ether): </strong>{convert(singleProject[5], 'wei').ether} </p>
            <label className="label">I want to contribute (ether)</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Amount of Ether to donate"
                onChange={handleChange}
                name="amount"
                value={amount}
              />
            </div>
          </div>
          {/* Submit */}
          <div className="field">
            <div className="control">
              <button className="button is-link">Contribute</button>
            </div>
          </div>
        </form>
      </div>
      </div>


      {/* Donate */}
      {/* </div> */}
    </div>
  );
};

export default SingleProjectForm;
