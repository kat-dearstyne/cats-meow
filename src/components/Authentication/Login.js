import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated to useNavigate
import authService from '../../services/AuthServices';
import AuthForm from './AuthForm';

function Login() {
  const [user, setUser] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // Use the useNavigate hook

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const loggedInUser = await authService.login(user);
      // Do something with logged in user data here
    } catch (error) {
      // Handle errors here
    }
  };

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleRegisterRedirect = () => {
    navigate("/register"); // Redirect to the register page
  };

  return (
    <div>
      <h1>Welcome to Cats Meow. Please Login:</h1>
      <AuthForm user={user} onChange={handleChange} onSubmit={handleLogin} />
      <p>Don't have an account? <button onClick={handleRegisterRedirect}>Sign Up!</button></p>
    </div>
  );
}

export default Login;