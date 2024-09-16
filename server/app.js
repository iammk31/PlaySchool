import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import { errorMiddleware } from './middleware/error.js';
import studentRoutes from './routes/studentRoute.js';
import cors from 'cors';

const app = express();
dotenv.config({ path: './config/config.env' });

// Middleware to parse incoming JSON
app.use(express.json());
app.use(cors());

const allowedOrigins = ['http://localhost:5173/'];

const corsOptions = {
  origin: ['http://localhost:5173/'],
  methods: [ 'POST' ],
  credentials: true, // Allow cookies to be sent with requests
};


// Database connection


// Routes
app.use('/api/students', studentRoutes);

// Test route to check server status
app.get('/', (req, res) => {
  res.send('Server is running');
});

dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
