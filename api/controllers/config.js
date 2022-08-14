const { Config, Knex } = require('../models/config');
const Controller = require('./all')(Config, Knex);

// ===== METHOD GET =====
exports.all = Controller.all;
exports.find = Controller.find;

// ===== METHOD POST =====
exports.store = Controller.store;

// ===== METHOD PUT =====
exports.update = Controller.update;

// ===== METHOD DELETE =====
exports.destroy = Controller.destroy;

// ===== METHOD INTERNAL =====
exports.migrate = Controller.migrate;
exports.seed = Controller.seed;