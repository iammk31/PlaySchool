import express from 'express';
import registerStudent from '../controller/studentController.js'; 
import loginAdmin from '../controller/LoginAdminController.js';
import { getAllNews, createNews, deleteNews } from '../controller/newsController.js';

const router = express.Router();

// Student and Admin routes
router.post('/register', registerStudent);
router.post('/login', loginAdmin);

// News routes
router.get('/news', getAllNews); // Route to get all news
router.post('/news', createNews); // Route to create news
router.delete('/news/:id', deleteNews); // Route to delete news by ID

export default router;
