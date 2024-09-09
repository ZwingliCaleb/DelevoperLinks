// server.js

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

// Middleware
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
