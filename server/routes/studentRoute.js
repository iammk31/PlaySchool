// routes/studentRoute.js
import express from 'express';
import registerStudent from '../controller/studentController.js'; 
import loginAdmin from '../controller/LoginAdminController.js';
import { getAllNews, createNews, deleteNews } from '../controller/newsController.js';
import { getAllStudents, addStudent, deleteStudent } from '../controller/adminStudentController.js';

const router = express.Router();

// Student routes
router.post('/register', registerStudent);
router.post('/login', loginAdmin);

// News routes
router.get('/news', getAllNews); // Route to get all news
router.post('/news', createNews); // Route to create news
router.delete('/news/:id', deleteNews); // Route to delete news by ID

// Admin student routes
router.get('/students', getAllStudents); // Route to get all students
router.post('/students', addStudent); // Route to add a student
router.delete('/students/:id', deleteStudent); // Route to delete a student by ID

export default router;
