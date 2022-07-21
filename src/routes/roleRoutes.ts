'use strict';

const roleApiHandler = require('../middlewares/apiHandler');
const roleController = require('../controllers/roleController');
const roleValidaton = require('../validations/roleValidation');
const roleRouter = require('express').Router();

roleRouter
  // Index Routes
  .route('/')
  .get(roleValidaton.getAll, roleApiHandler.handle(roleController.getAll))
  .post(roleValidaton.create, roleApiHandler.handle(roleController.create));
roleRouter
  // Specific ID Routes
  .route('/:id')
  .get(roleValidaton.getById, roleApiHandler.handle(roleController.getById))
  .patch(roleValidaton.update, roleApiHandler.handle(roleController.update))
  .delete(roleValidaton.delete, roleApiHandler.handle(roleController.delete));

module.exports = roleRouter;
