import React, { useState } from 'react';
import axios from 'axios';
import './PostForm.css'; // Import the CSS file

function PostForm() {
  const [text, setText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/schedule', { text });
      setText('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <label>
        Post Text:
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          className='form-input'
        />
      </label>
      <button type='submit' className='form-button'>
        Schedule Post
      </button>
    </form>
  );
}

export default PostForm;
