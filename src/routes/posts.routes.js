const express = require('express');

const router = express.Router();

// GET /api/v1/posts
router.get('/posts', (req, res) => {
  res.status(200).json({
    message: 'All posts fetched successfully'
  });
});

module.exports = router;