import express from 'express';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js';
import  errorMiddleware  from './middleware/error.js';
import studentRoutes from './routes/studentRoute.js';
import adminRoutes from './routes/studentRoute.js';
import newsRoutes from './routes/studentRoute.js';
import cors from 'cors';

const app = express();
dotenv.config({ path: './config/config.env' });


app.use(express.json());
app.use(cors(
  {
    origin: "https://edukids-alpha.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  }
));


// Routes
app.use('/api/students', studentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/news', newsRoutes); 


app.get('/', (req, res) => {
  res.send('Server is running');
});

dbConnection();

// Error handling middleware
app.use(errorMiddleware);

export default app;
