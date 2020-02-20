const express = require('express');
const xss = require('xss');
const classicService = require('../service/classicService');
const classicRouter = express.Router();

const serializeClassic = classic => ({
  classic_id: classic.classic_id,
  classic_name: xss(classic.classic_name),
  classic_tea: classic.tea_name,
  classic_tea_recipe: classic.tea_recipe,
  classic_flavor1: classic.classic_flavor1,	
  classic_flavor2: classic.classic_flavor2,

  classic_addons1: classic.addon_name,	
  classic_addons1_recipe: classic.addon_recipe,

  classic_addons2: classic.classic_addons2,		

  classic_milk: classic.classic_milk,	
  classic_sweetener: classic.classic_sweetener
});

classicRouter
  .route('/api/classic')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    classicService.getAllClassic(knexInstance)
      .then(classic => {
        res.json(classic.map(serializeClassic));
      })
      .catch(next);
  })

classicRouter
  .route('/api/classic/:classic_id')
  .all((req, res, next) => {
    classicService.getById(
      req.app.get('db'),
      req.params.classic_id
    )
      .then(classic => {
        if (!classic) {
          return res.status(404).json({
            error: { message: 'This tea doesn\'t exist' }
          });
        }
        res.classic = classic;
        next();
      })
      .catch(next);
  })
  .get((req, res, next) => {
    res.json(serializeClassic(res.classic));
  })

module.exports = classicRouter;