const express = require('express');
const User = require('../models/user'); // Importing the User model from models/user.js
const router = express.Router();

// POST request to create a new user
router.post('/', async (req, res) => {
  const { firstName, lastName, email } = req.body;

  try {
    const newUser = new User({ firstName, lastName, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ message: 'Error creating user', error: err });
  }
});

// GET request to fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // This will fetch all users from the 'users' collection
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users', error: err });
  }
});

module.exports = router;
