require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const classicRouter = require('../router/classicRouter')
const creationRouter = require('../router/creationRouter')
const optionsRouter = require('../router/optionsRouter')
const authRouter = require('../router/authRouter')
const userRouter = require('../router/userRouter')

const app = express();

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
app.use(classicRouter);
app.use(creationRouter);
app.use(optionsRouter);
app.use(authRouter);
app.use(userRouter);

app.get('/api', (req, res) => {
  res.send({message: 'Hello, world!'});
});

app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});

module.exports = app;