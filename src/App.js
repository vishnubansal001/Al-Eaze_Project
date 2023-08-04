import React from 'react';
import SignupForm from './pages/signUpForm';
import LoginForm from './pages/loginForm';

const App = () => {
  return (
    <div>
      <h1>Signup</h1>
      <SignupForm />
      <h1>Login</h1>
      <LoginForm />
    </div>
  );
};

export default App;