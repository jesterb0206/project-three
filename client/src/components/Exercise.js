/* eslint-disable no-unused-vars */

import {React, useState} from 'react';

const styles = {};

const Exercise = () => {
  return (
    <div className='exerciseBtns'>
      <div></div>
      {/* <button> - remove exercise</button> */}
      {/* <h1> Example exercise 1</h1> */}
      {/* <p>Weight</p> */}
      {/* <p> set: 1 x 12</p> */}
      <button>
        {' '}
        {/* + used to increase set<i className='material-icons'>barbell</i> */}
      </button>
      <button>
        {' '}
        {/* - used to decrease set<i className='material-icons'>barbell</i> */}
      </button>
    </div>
  );
};

export default Exercise;
