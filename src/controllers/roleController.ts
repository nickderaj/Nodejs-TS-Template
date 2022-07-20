import { Request } from 'express';
import { Role } from '../models/roleModel';

exports.getAll = async () => {
  const records = await Role.getAll();
  return records ? { statusCode: 200, data: records } : { statusCode: 404, data: [] };
};

exports.getById = async (req: Request) => {
  const { id } = req.params;
  const record = await Role.getById(id);
  return record ? { statusCode: 200, data: record } : { statusCode: 404, data: {} };
};

exports.create = async (req: Request) => {
  const record = new Role(req.body);
  return (await record.save()) ? { statusCode: 201, data: record } : { statusCode: 422, data: 'unprocessable entity' };
};

exports.update = async (req: Request) => {
  const { id } = req.params;
  const payload = req.body;
  return (await Role.update(id, payload))
    ? { statusCode: 200, data: { message: 'updated!' } }
    : { statusCode: 422, data: { message: 'unprocessable entity' } };
};

exports.delete = async (req: Request) => {
  const { id } = req.params;
  return (await Role.destroy(id)) ? { statusCode: 204, data: {} } : { statusCode: 422, data: 'unprocessable entity' };
};
