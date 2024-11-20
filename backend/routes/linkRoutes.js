const express = require('express');
const Link = require('../models/Link');
const router = express.Router();

// Add a new link
router.post('/', async (req, res) => {
  try {
    const { userId, platform, url } = req.body;
    const newLink = new Link({ userId, platform, url });
    await newLink.save();
    res.status(201).json(newLink);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get links for a user
router.get('/:userId', async (req, res) => {
  try {
    const links = await Link.find({ userId: req.params.userId });
    res.status(200).json(links);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
