import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import the CSS file

function LoginPage() {
  const responseGoogle = (response) => {
    console.log(response);
    // Send response to your backend to complete the authentication process
  };

  return (
    <div className='login-container'>
      <h1>Login Page</h1>
      <form className='login-form'>
        <input
          type='email'
          placeholder='Email'
          required
          className='login-input'
        />
        <input
          type='password'
          placeholder='Password'
          required
          className='login-input'
        />
        <button type='submit' className='login-button'>
          Log in
        </button>
      </form>
      <Link to='/forgot-password' className='forgot-password-link'>
        Forgot Password?
      </Link>
      <GoogleLogin
        clientId='your-google-client-id'
        buttonText='Login with Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        className='social-login-button'
      />
      {/* Add Facebook and LinkedIn login options here */}
    </div>
  );
}

export default LoginPage;
