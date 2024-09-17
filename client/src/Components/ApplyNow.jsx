// src/components/RegistrationPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentsName: '',
    dob: '',
    gender: '',
    aadharCard: '',
    parentsEmail: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/students/register', formData);
      
      if (response.status === 201) {
        console.log('Registration Successful:', response.data);
        alert('Registration successful');
        navigate("/");
      } else {
        console.error('Error:', response.data.message);
        alert('Registration failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('Server error: ' + error.message);
    }
  };
  

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Registration Form</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        
        <div>
          <label className="block text-sm font-medium">Student Name</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder="Enter student's name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Parents Name</label>
          <input
            type="text"
            name="parentsName"
            value={formData.parentsName}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder="Enter parents' name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            required
          >
            <option value="" disabled>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Aadhar Card (Gov ID)</label>
          <input
            type="text"
            name="aadharCard"
            value={formData.aadharCard}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder="Enter Aadhar Card number"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Parents Email</label>
          <input
            type="email"
            name="parentsEmail"
            value={formData.parentsEmail}
            onChange={handleChange}
            className="border border-gray-300 p-2 rounded-md w-full"
            placeholder="Enter parents' email"
            required
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
