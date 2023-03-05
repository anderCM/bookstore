import React from 'react';

import './Chapter.css';

const Chapter = () => (
  <>
    <p className="chapter opacity-50 mb-0">CURRENT CHAPTER</p>
    <p className="current-chapter">Chapter 17</p>
    <button type="button" className="update-progress btn px-4">UPDATE PROGRESS</button>
  </>
);

export default Chapter;
