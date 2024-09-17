import express from 'express';
import registerStudent from '../controller/studentController.js'; 
import loginAdmin  from '../controller/LoginAdminController.js';

const router = express.Router();

router.post('/register', registerStudent);

router.post('/login', loginAdmin);

export default router;
