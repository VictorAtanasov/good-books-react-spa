import React from 'react';

const Loader = (props) => {
  if (props.loading) {
    return (
      <p>
        Loading
      </p>
    );
  }
  return null;
};

export default Loader;
