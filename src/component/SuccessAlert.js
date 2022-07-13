import React from 'react';
import './style.css';
import logo from '../assets/ok.gif'

const SuccessAlert = () => {
  return (
    <div className='main' style={{marginBottom: "385px" ,marginTop:"220px"}}>
      <div className='container'>
        <div
          className='appointment-form'
        >
          <img
            src={logo}
            alt='loading...'
            className='oklogo'
          />
          <h2>Thank You!</h2>
          <h2 className='success_text'>Form submitted successfully.</h2>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;
