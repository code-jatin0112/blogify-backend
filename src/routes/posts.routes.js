const express = require('express');
const { getAllPosts } = require('../controllers/posts.controller');

const router = express.Router();

// GET /api/v1/posts
router.get('/posts', getAllPosts);

module.exports = router;