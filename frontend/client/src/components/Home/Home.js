import React from 'react';
import './Home.css'
import img1 from '../../images/home.jpg'
const Home = () => {
    return (
      <div className='primary'>
          <div className="curve">
            <h1>Blockchain E-Voting</h1>
          <img src={img1} alt="" />
          <a href="/login">Login/Register as a voter</a> <br />
          <a href="/login">Login/Register as an admin</a>
          </div>
      </div> 
    );
}

export default Home;
