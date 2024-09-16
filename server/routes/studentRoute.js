import express from 'express';
import registerStudent from '../controller/studentController.js'; // Default import

const router = express.Router();

// Route to register a student
router.post('/register', registerStudent);

export default router;
