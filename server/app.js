import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './middleware/error.js';


const app = express();
dotenv.config({ path: './config/config.env' });
app.use(express.json());



// Test route
app.get('/', (req, res) => {
  res.send('Server is running');
});

// Database connection
dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;