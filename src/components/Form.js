import React, { useState } from 'react';

function Form({ onSubmit, emailError }) {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="inputContainer">
        <div className="errorContainer">
          <label htmlFor="emailInput">Email address</label>
          {/* Display the error message if emailError is not empty */}
          {emailError && <p className="errorText">{emailError}</p>}
        </div>
        <input
          className="emailInput"
          id="emailInput"
          type="text"
          placeholder="email@company.com"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <button
        aria-label="Subscribe to monthly newsletter"
        type="submit"
        className="btn"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
}

export default Form;
