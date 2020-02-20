const express = require('express');

const optionsRouter = express.Router();

optionsRouter
.route('/api/tea')
.get((req, res, next) => {
  const knexInstance = req.app.get('db');
  knexInstance.raw('SELECT enum_range(NULL::boba_tea)')
    .then(array => {
      res.json(array);
    })
    .catch(next);
  })

optionsRouter
.route('/api/flavor')
.get((req, res, next) => {
  const knexInstance = req.app.get('db');
  knexInstance.raw('SELECT enum_range(NULL::boba_flavor)')
    .then(array => {
      res.json(array);
    })
    .catch(next);
  })

optionsRouter
.route('/api/addons')
.get((req, res, next) => {
  const knexInstance = req.app.get('db');
  knexInstance.raw('SELECT enum_range(NULL::boba_addons)')
    .then(array => {
      res.json(array);
    })
    .catch(next);
  })

optionsRouter
.route('/api/milk')
.get((req, res, next) => {
  const knexInstance = req.app.get('db');
  knexInstance.raw('SELECT enum_range(NULL::boba_milk)')
    .then(array => {
      res.json(array);
    })
    .catch(next);
  })

optionsRouter
.route('/api/sweetener')
.get((req, res, next) => {
  const knexInstance = req.app.get('db');
  knexInstance.raw('SELECT enum_range(NULL::boba_sweetener)')
    .then(array => {
      res.json(array);
    })
    .catch(next);
  })

module.exports = optionsRouter;
