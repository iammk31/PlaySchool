import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/admin/login', formData);
      if (response.status === 200) {
        alert('Login successful');
        navigate('/admin-dashboard'); 
      } else {
        setError(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials or server error');
    }
  };

  return (
    <div className="bg-pink-50 min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md w-full"
              placeholder="Enter admin email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md w-full"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-teal-500 text-white py-2 px-4 rounded-md w-full hover:bg-teal-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
