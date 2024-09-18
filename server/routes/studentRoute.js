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
router.get('/news', getAllNews); 
router.post('/news', createNews); 
router.delete('/news/:id', deleteNews); 

// Admin student routes
router.get('/students', getAllStudents); 
router.post('/students', addStudent); 
router.delete('/students/:id', deleteStudent); 

export default router;
