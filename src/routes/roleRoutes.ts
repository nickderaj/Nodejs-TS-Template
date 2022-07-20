'use strict';

const apiHandler = require('../middlewares/apiHandler');
const roleController = require('../controllers/roleController');
const roleValidaton = require('../validations/roleValidation');
const router = require('express').Router();

router
  // Index Routes
  .route('/')
  .get(roleValidaton.getAll, apiHandler.handle(roleController.getAll))
  .post(roleValidaton.create, apiHandler.handle(roleController.create));
router
  // Specific ID Routes
  .route('/:id')
  .get(roleValidaton.getById, apiHandler.handle(roleController.getById))
  .patch(roleValidaton.update, apiHandler.handle(roleController.update))
  .delete(roleValidaton.delete, apiHandler.handle(roleController.delete));

module.exports = router;
