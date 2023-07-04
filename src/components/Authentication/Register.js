import React, { useState } from 'react';
import authService from '../../services/AuthServices';
import AuthForm from './AuthForm';
import {useNavigate} from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ firstName: '', lastName: '', email: '', password: '' });

  const navigate = useNavigate(); // Use the useNavigate hook

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const registeredUser = await authService.register(user);
      // Do something with registered user data here
    } catch (error) {
      // Handle errors here
    }
  };

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect to the register page
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h2>Welcome to Cats Meow!</h2>
      <h2>Please fill out the fields below to register.</h2>
      <AuthForm user={user} onChange={handleChange} onSubmit={handleRegister} buttonText="Register" />
      <p>Already have an account? <button onClick={handleLoginRedirect}>Login in</button></p>

    </div>
  );
}

export default Register;
