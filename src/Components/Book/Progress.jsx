import React from 'react';

import './Progress.css';

const Progress = () => (
  <>
    <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
      <div className="container-circle rounded-circle border border-secondary border-opacity-25">
        <div className="circle">
          <div className="mask full rounded-circle position-absolute">
            <div className="fill bg-primary rounded-circle position-absolute" />
          </div>
          <div className="mask half position-absolute">
            <div className="fill bg-primary rounded-circle position-absolute" />
          </div>
          <div className="inside-circle position-absolute rounded-circle mt-2 ms-2 bg-white border border-secondary border-opacity-25" />
        </div>
      </div>
      <div>
        <h3>70%</h3>
        <p>Completed</p>
      </div>
    </div>
  </>
);

export default Progress;
