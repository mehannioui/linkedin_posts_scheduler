// HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file

function HomePage() {
  return (
    <div className='home-container'>
      <h1>Welcome to our Automatic LinkedIn Posting service!</h1>
      <p>
        Here, you can schedule your LinkedIn posts and we will automatically
        post them for you at the scheduled time.
      </p>
      <div className='section'>
        <img
          src='https://via.placeholder.com/150'
          alt='Placeholder image 1'
          className='section-image'
        />
        <p className='section-text'>
          This is some text to the right of the image.
        </p>
      </div>
      <div className='section'>
        <p className='section-text'>
          This is some text to the left of the image.
        </p>
        <img
          src='https://via.placeholder.com/150'
          alt='Placeholder image 2'
          className='section-image'
        />
      </div>
      {/* Add more sections as needed */}
    </div>
  );
}

export default HomePage;
