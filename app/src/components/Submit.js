import React from 'react';
import { useToasts } from 'react-toast-notifications';

const Submit = (props) => {
  const { addToast } = useToasts();

  const onSubmit = async (e) => {
    e.preventDefault();
    props.handleSubmit();
    addToast('Successfully added project!', { appearance: 'success' });
  };

  return (
    <div className="field">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
    </div>
  );
};

export default Submit;
