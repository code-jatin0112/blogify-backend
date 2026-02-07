const express = require('express');
const {
  getAllPosts,
  getPostById
} = require('../controllers/posts.controller');

const router = express.Router();

// GET /api/v1/posts
router.get('/posts', getAllPosts);

// GET /api/v1/posts/:postId
router.get('/posts/:postId', getPostById);

module.exports = router;
