// app.mjs
import express from 'express';
import connectDB from './config/database.mjs';
import itemRoutes from './routes/itemRoutes.mjs';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Connect to MongoDB Atlas
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
