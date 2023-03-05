import React from 'react';
import Proptypes from 'prop-types';

import './Progress.css';

const Progress = ({ index }) => {
  const percentaje = {
    0: '64%',
    1: '8%',
    2: '0%',
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="circular-progress rounded-circle" />
        </div>
        <div className="col-12 col-md-8 text-center text-md-end">
          <p className="percemtaje mb-0 mt-2">{!percentaje[index] ? '0%' : percentaje[index]}</p>
          <p className="status opacity-50">Completed</p>
        </div>
      </div>
    </>
  );
};

Progress.propTypes = {
  index: Proptypes.oneOfType([Proptypes.number]).isRequired,
};

export default Progress;
