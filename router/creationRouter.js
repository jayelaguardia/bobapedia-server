const path = require('path');
const express = require('express');
const xss = require('xss');
const creationService = require('../service/creationService');

const creationRouter = express.Router();
const jsonParser = express.json();

const serializeCreation = creation => ({
  creation_user: creation.creation_user,
  creation_id: creation.creation_id,
  creation_name: xss(creation.creation_name),
  creation_tea: creation.creation_tea,
  creation_flavor1: creation.creation_flavor1,	
  creation_flavor2: creation.creation_flavor2,
  creation_addons1: creation.creation_addons1,	
  creation_addons2: creation.creation_addons2,	
  creation_milk: creation.creation_milk,	
  creation_sweetener: creation.creation_sweetener
});

creationRouter
  .route('/api/creation')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    creationService.getAllCreation(knexInstance)
      .then(creation => {
        res.json(creation.map(serializeCreation));
      })
      .catch(next);
  })
  .post(jsonParser, (req, res, next) => {
    const { creation_user, creation_name, creation_tea, creation_flavor1, creation_flavor2, creation_addons1, creation_addons2, creation_milk, creation_sweetener } = req.body;
    const newCreation = { creation_user, creation_name, creation_tea, creation_flavor1, creation_flavor2, creation_addons1, creation_addons2, creation_milk, creation_sweetener };

    if(newCreation.creation_name === null || newCreation.creation_tea === null) {
      return res.status(400).json({
        error: { message: 'Missing name or tea in request body' }
    })}

    creationService.insertCreation(
      req.app.get('db'),
      newCreation
    )
      .then(creation => {
        res
          .status(201)
          .location(path.posix.join(req.originalUrl, `/${creation.creation_id}`))
          .json(serializeCreation(creation));
      })
      .catch(next);
  });

creationRouter
  .route('/api/creation/:creation_id')
  .all((req, res, next) => {
    creationService.getById(
      req.app.get('db'),
      req.params.creation_id
    )
      .then(creation => {
        if (!creation) {
          return res.status(404).json({
            error: { message: 'creation doesn\'t exist' }
          });
        }
        res.creation = creation;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(serializeCreation(res.creation));
  })
  .delete((req, res, next) => {
    creationService.deleteCreation(
      req.app.get('db'),
      req.params.creation_id
    )
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  })
  .patch(jsonParser, (req, res, next) => {
    const { creation_user, creation_name, creation_tea, creation_flavor1, creation_flavor2, creation_addons1, creation_addons2, creation_milk, creation_sweetener } = req.body;
    const creationToUpdate = { creation_user, creation_name, creation_tea, creation_flavor1, creation_flavor2, creation_addons1, creation_addons2, creation_milk, creation_sweetener };

    if (!creationToUpdate.creation_tea || !creationToUpdate.creation_name)
      return res.status(400).json({
        error: {
          message: 'Request body must contain either \'name\' or \'tea\''
        }
      });

    creationService.updateCreation(
      req.app.get('db'),
      req.params.creation_id,
      creationToUpdate
    )
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = creationRouter;