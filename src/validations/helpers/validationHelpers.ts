'use strict';

const DB = require('../../../db/knex');

//////// ROLES ////////
exports.roleExists = async (payload: { role_id: string }) => {
  try {
    const { role_id } = payload;
    const record = await DB('roles').where({ id: role_id }).select('*');
    return Object.keys(record).length > 0;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

exports.roleNameInUse = async (payload: { name: string }) => {
  try {
    const { name } = payload;
    const record = await DB('roles').where({ name }).select('*');
    return Object.keys(record).length > 0 && record[0].name === name;
  } catch (error) {
    throw new Error(`${error}`);
  }
};
