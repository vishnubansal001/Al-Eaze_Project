import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    allergy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/signup', formData);
      // Handle successful signup (e.g., show success message or redirect)
      console.log('Signup successful', response.data);
    } catch (error) {
      // Handle signup errors (e.g., display error message)
      console.error('Signup error', error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <div>
        <label>Allergy:</label>
        <input type="text" name="allergy" value={formData.allergy} onChange={handleChange} />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;