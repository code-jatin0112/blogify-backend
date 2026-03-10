const express = require('express');
const router = express.Router();

const {
  getAllPosts,
  getPostById
} = require('../controllers/posts.controller');

// GET /api/v1/posts
router.get('/', getAllPosts);

// GET /api/v1/posts/:postId
router.get('/:postId', getPostById);

module.exports = router;