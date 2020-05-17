import React from 'react';
import { useToasts } from 'react-toast-notifications';

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
    <div className="container">
      <div className="notification">
        <h3>Project: {singleProject[2]}</h3>
        <p>Description: {singleProject[3]}</p>
        <p>Goal: {singleProject[4]}</p>
        <p>Amount Donated: {singleProject[5]}</p>
        <progress
          className="progress is-primary"
          value={singleProject[5]}
          max={singleProject[4]}
        />

        {/* Donate */}
        <form onSubmit={onSubmit}>
          {/* Amount to Donate */}
          <div className="field">
            <label className="label">I want to contribute</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Number input"
                onChange={handleChange}
                name="amount"
                value={amount}
              />
            </div>
          </div>
          {/* Submit */}
          <div className="field">
            <div className="control">
              <button className="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingleProjectForm;