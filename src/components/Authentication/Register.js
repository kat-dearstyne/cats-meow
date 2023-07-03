import React, { useState } from 'react';
import authService from '../../services/AuthServices';
import AuthForm from './AuthForm';

function Register() {
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const registeredUser = await authService.register(user);
      // Do something with registered user data here
    } catch (error) {
      // Handle errors here
    }
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2>Please fill out the fields below to register.</h2>
      <AuthForm user={user} onChange={handleChange} onSubmit={handleRegister} buttonText="Register" />
    </div>
  );
}

export default Register;
