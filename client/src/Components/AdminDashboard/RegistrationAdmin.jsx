import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backendUrl } from '../../utils/config.js';

const AdminPage = () => {
  const [formData, setFormData] = useState({
    studentName: '',
    parentsName: '',
    dob: '',
    gender: '',
    aadharCard: '',
    parentsEmail: '',
  });
  const [students, setStudents] = useState([]);

  // Fetch students from the backend
  const fetchStudents = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}api/students/students`);
      setStudents(response.data.students);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${backendUrl}api/students/students`,
        formData);
      if (response.status === 201) {
        alert('Student added successfully');
        setFormData({
          studentName: '',
          parentsName: '',
          dob: '',
          gender: '',
          aadharCard: '',
          parentsEmail: '',
        });
        fetchStudents(); // Refresh the student list
      } else {
        alert('Error adding student: ' + response.data.message);
      }
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Server error: ' + error.message);
    }
  };

  const handleDeleteStudent = async (id) => {
    try {
      await axios.delete(`${backendUrl}api/students/students/${id}`);
      alert('Student deleted successfully');
      fetchStudents(); // Refresh the student list
    } catch (error) {
      console.error('Error deleting student:', error);
      alert('Server error: ' + error.message);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <form onSubmit={handleAddStudent} className="mb-6 space-y-4">
        <h2 className="text-xl font-semibold">Add New Student</h2>
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
          className="bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600"
        >
          Submit
        </button>
      </form>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Student List</h2>
        {students.length > 0 ? (
          students.map(student => (
            <div key={student._id} className="bg-white p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold">{student.studentName}</h3>
              <p>Parents: {student.parentsName}</p>
              <p>Date of Birth: {new Date(student.dob).toLocaleDateString()}</p>
              <p>Gender: {student.gender}</p>
              <p>Aadhar Card: {student.aadharCard}</p>
              <p>Parents Email: {student.parentsEmail}</p>
              <button
                onClick={() => handleDeleteStudent(student._id)}
                className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 mt-4"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No students available</p>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
