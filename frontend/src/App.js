import React from 'react';
import Router from './Router';
import './App.css';

function App() {
  const responseGoogle = (response) => {
    console.log(response);
    // Here you would typically send the response to your backend to complete the authentication process
  };

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
