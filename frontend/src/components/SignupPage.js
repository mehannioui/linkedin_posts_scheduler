import React from 'react';
import './SignupPage.css'; // Import the CSS file

function SignupPage() {
  const handleSignup = (event) => {
    event.preventDefault();
    // Handle signup logic here
  };

  return (
    <div className='signup-container'>
      <h1>Signup Page</h1>
      <form onSubmit={handleSignup} className='signup-form'>
        <input
          type='email'
          placeholder='Email'
          required
          className='signup-input'
        />
        <input
          type='password'
          placeholder='Password'
          required
          className='signup-input'
        />
        <input
          type='password'
          placeholder='Confirm Password'
          required
          className='signup-input'
        />
        <button type='submit' className='signup-button'>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
