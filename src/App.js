import React, { useState } from 'react';
import Layout from './components/Layout';
import MobileSuccess from './components/MobileSuccuss';

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (input) => {
    if (!input) {
      return 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(input)) {
      return 'Please enter a valid email address';
    } else {
      return '';
    }
  };

  const handleSubmit = (email) => {
    const error = validateEmail(email);
    setEmailError(error);

    if (!error) {
      setIsFormSubmitted(true);
    }
  };

  const handleDismiss = () => {
    setIsFormSubmitted(false);
  };

  return (
    <div>
      {isFormSubmitted ? (
        <MobileSuccess onDismiss={handleDismiss} />
      ) : (
        <Layout onSubmit={handleSubmit} emailError={emailError} />
      )}
    </div>
  );
}

export default App;
