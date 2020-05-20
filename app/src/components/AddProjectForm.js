import React from 'react';
import { useToasts } from 'react-toast-notifications';

const AddProjectForm = (props) => {
  const {
    handleChange,
    handleSubmit,
    state: { name, description, amountNeeded, imageUrl },
  } = props;
  const { addToast } = useToasts();

  const onSubmit = async (e) => {
    e.preventDefault();
    const toast = await handleSubmit();
    toast
      ? addToast('Submission successful!', { appearance: 'success' })
      : addToast('Submission failed!', { appearance: 'error' });
  };

  return (
    <div className="container">
      <div className="notification">
        <form onSubmit={onSubmit}>
          {/* Project Name */}
          <div className="field">
            <label className="label">Project Name</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Text input"
                onChange={handleChange}
                name="name"
                value={name}
              />
            </div>
          </div>
          {/* Description */}
          <div className="field">
            <label className="label">Description</label>
            <div className="control">
              <input
                className="textarea"
                type="text"
                placeholder="Enter description"
                onChange={handleChange}
                name="description"
                value={description}
              />
            </div>
          </div>
          {/* Image URL */}
          <div className="field">
            <label className="label">Image Url</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Enter Image Url "
                onChange={handleChange}
                name="imageUrl"
                value={imageUrl}
              />
            </div>
          </div>
          {/* Amount Needed */}
          <div className="field">
            <label className="label">Amount Needed (ether)</label>
            <div className="control">
              <input
                className="input"
                type="number"
                placeholder="Number input"
                onChange={handleChange}
                name="amountNeeded"
                value={amountNeeded}
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

export default AddProjectForm;
