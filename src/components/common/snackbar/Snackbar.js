import React from 'react';
import './snackbar.css';

const Snackbar = (props) => {
  let showBar = 'snackbar-hide';
  if (props.open) {
    showBar = 'snackbar-show';
  } else {
    showBar = 'snackbar-hide';
  }
  return (
    <div
      className={`snackbar ${showBar}`}
      onClick={props.click}
      style={props.styles}
    >
      <span className="snackbar-text">
        {props.message}
      </span>
    </div>
  );
};

export default Snackbar;
