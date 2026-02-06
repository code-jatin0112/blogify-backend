const express = require('express');
const postsRouter = require('./routes/posts.routes');

const app = express();

app.use(express.json());

// Mount posts router
app.use('/api/v1', postsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});