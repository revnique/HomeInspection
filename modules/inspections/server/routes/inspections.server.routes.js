'use strict';

/**
 * Module dependencies
 */
var inspections = require('../controllers/inspections.server.controller');

module.exports = function (app) {
    app.route('/api/inspections').all(function() { return true; })
      .get(inspections.list)
      .post(inspections.create);

    app.route('/api/inspections/:inspectionId').all(function() { return true; })
      .get(inspections.read)
      .put(inspections.update)
      .delete(inspections.delete);

    app.param('inspectionId', inspections.inspectionsByID);
};
