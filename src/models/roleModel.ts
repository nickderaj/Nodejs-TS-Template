'use strict';

const DB = require('../../db/knex');
const { v4: uuidv4 } = require('uuid');
const table = 'roles';

export interface Role {
  id: string;
  name: string;
  description: string;
}

export class Role {
  constructor(payload: Role) {
    this.id = uuidv4();
    this.name = payload.name.toLowerCase();
    this.description = payload.description.toLowerCase();
  }

  save() {
    const { id, name, description } = this;
    return DB(table).insert({ id, name, description });
  }

  static getAll() {
    return DB(table).select('name', 'description');
  }

  static getById(id: string) {
    return DB(table).where({ id }).select('name', 'description').first();
  }

  static destroy(id: string) {
    return DB(table).where({ id }).del();
  }

  static update(id: string, options: Role) {
    return DB(table).where({ id }).update(options);
  }
}

module.exports = Role;
