const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const postsRouter = require('./routes/posts.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// mount router
app.use('/api/v1/posts', postsRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});