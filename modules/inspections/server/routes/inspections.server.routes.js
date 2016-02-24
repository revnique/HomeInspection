'use strict';

/**
 * Module dependencies
 */
var inspections = require('../controllers/inspections.server.controller');

module.exports = function (app) {
    app.route('/api/inspections')
      .get(inspections.list)
      .post(inspections.create);

    app.route('/api/inspections/:inspectionId')
      .get(inspections.read)
      .put(inspections.update)
      .delete(inspections.delete);


    app.route('/api/category')
      .get(inspections.listCategory)
      .post(inspections.createCategory);

    app.route('/api/categoryitem')
      .post(inspections.createCategoryItem);

    app.route('/api/categoryitemoption')
      .post(inspections.createCategoryItemOption);

    app.param('inspectionId', inspections.inspectionsByID);
};



//'use strict';

//module.exports = function (app) {
//    var users = require('../../app/controllers/users.server.controller');
//    var needs = require('../../app/controllers/needs.server.controller');

//    // Needs Routes
//    app.route('/needs')
//		.get(needs.list)
//		.post(users.requiresLogin, needs.create);

//    app.route('/needs/:needId')
//		.get(needs.read)
//		.put(users.requiresLogin, needs.hasAuthorization, needs.update)
//		.delete(users.requiresLogin, needs.hasAuthorization, needs.delete);

//    // Finish by binding the Need middleware
//    app.param('needId', needs.needByID);
//};
