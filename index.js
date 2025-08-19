// server/index.js

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import msmeRoutes from './routes/msmeRoutes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Allows requests from your frontend
app.use(express.json());

// API Route
app.use('/api/msmes', msmeRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});