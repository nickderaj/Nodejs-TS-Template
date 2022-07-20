'use strict';

import { NextFunction, Request, Response } from 'express';

const Joi = require('joi');
const { roleNameInUse } = require('./helpers/validationHelpers');

exports.getAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    // TODO: Think about validation case.
    next();
  } catch (error) {
    let errorMessage = 'Something went wrong!';
    if (error instanceof Error) errorMessage = error.toString();
    res.status(422).json({ message: errorMessage });
  }
};

exports.getById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) res.status(400).json({ message: 'Id param is missing' });
    next();
  } catch (error) {
    let errorMessage = 'Something went wrong!';
    if (error instanceof Error) errorMessage = error.toString();
    res.status(422).json({ message: errorMessage });
  }
};

exports.create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      description: Joi.string().required(),
    });
    await schema.validateAsync(req.body);

    const roleInUse = await roleNameInUse(req.body);
    if (roleInUse) res.status(400).json({ message: 'Role name in use' });
    next();
  } catch (error) {
    let errorMessage = 'Something went wrong!';
    if (error instanceof Error) errorMessage = error.toString();
    res.status(422).json({ message: errorMessage });
  }
};

exports.delete = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) res.status(400).json({ message: 'Id param is missing' });
    next();
  } catch (error) {
    let errorMessage = 'Something went wrong!';
    if (error instanceof Error) errorMessage = error.toString();
    res.status(422).json({ message: errorMessage });
  }
};

exports.update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    if (!id) res.status(400).json({ message: 'Id param is missing' });
    const schema = Joi.object({
      id: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string().required(),
    });
    await schema.validateAsync({ ...req.body, id });

    const roleInUse = await roleNameInUse(req.body);
    if (roleInUse) res.status(400).json({ message: 'Role name in use' });
    next();
  } catch (error) {
    let errorMessage = 'Something went wrong!';
    if (error instanceof Error) errorMessage = error.toString();
    res.status(422).json({ message: errorMessage });
  }
};
