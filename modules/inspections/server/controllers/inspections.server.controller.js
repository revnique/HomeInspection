'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Inspection = mongoose.model('Inspection'),
    InspectionTemplate = mongoose.model('InspectionTemplate'),
    Category = mongoose.model('Category'),
    CategoryItem = mongoose.model('CategoryItem'),
    CategoryItemOption = mongoose.model('CategoryItemOption'),
  errorHandler = require('../../../core/server/controllers/errors.server.controller'),
  _ = require('lodash');



exports.demoSocketIO = function (req, res) {
    var app = require('express')();
    var http = require('http').Server(app);
    var socketio = require('socket.io')(http);
    //console.log("demoSocketIO", socketio);

    //var socketio = req.app.get('socketio'); // tacke out socket instance from the app container
    //console.log("socketio", socketio);
    var demo = {
        title: "potato salad",
        date: new Date()
    };

    socketio.sockets.emit('demoSocketIO.called', demo); // emit an event for all connec

    return res.jsonp({ info: "create cat" });
};



exports.createInpsectionTemplate = function (req, res) {
    console.log("create template", req);
   
    var inpsectionTemplate = new InspectionTemplate(req.body);
    inpsectionTemplate.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(inpsectionTemplate);
        }
    });

    //return res.jsonp({ info: "create cat" });
};



exports.listInpsectionTemplate = function (req, res) {
    console.log("list template", req);
    //inspection.user = req.user;


    InspectionTemplate.find().sort('-created').populate('user', 'displayName').exec(function (err, templates) {
            if (err) {
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)
                });
            } else {
                res.jsonp(templates);
            }
        });
    //return res.jsonp({ info: "create cat" });
};

exports.readInspectionTemplate = function (req, res) {
    var id = req.params.templateId;
    InspectionTemplate.findById(id).populate('user', 'displayName').exec(function (err, inpsectionTemplate) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            if (!inpsectionTemplate) {
                return res.status(400).send('Failed to load InpsectionTemplate ' + id);
            } else {
                res.jsonp(inpsectionTemplate);
            }
        }
    });
};

//56d11fba7502e3d81a4aafe7

exports.getInspectionTemplateById = function (req, res, next, id) {
    InspectionTemplate.findById(id).populate('user', 'displayName').exec(function (err, inpsectionTemplate) {
        if (err) return next(err);
        if (!inpsectionTemplate) return next(new Error('Failed to load InpsectionTemplate ' + id));
        req.inpsectionTemplate = inpsectionTemplate;
        next();
    });
};



/**
 * Create a 
 */
exports.create = function (req, res) {
    console.log("create inspection", req);
    var inspection = new Inspection(req.body);
    //inspection.user = req.user;

    inspection.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(inspection);
        }
    });

};




/**
 * Show the current 
 */
exports.read = function (req, res) {

};

/**
 * Update a 
 */
exports.update = function (req, res) {

};

/**
 * Delete an 
 */
exports.delete = function (req, res) {

};

/**
 * List of 
 */
exports.list = function (req, res) {
    return res.jsonp({ doit: "hellowordl" });
};
exports.inspectionsByID = function (req, res) {
    
};







/**
 * Categories
 */
exports.createCategory = function (req, res) {
    console.log("create cat", req);
    //inspection.user = req.user;
    var temp = {
        categoryName: req.body.categoryName
    };
    var category = new Category(temp);
    category.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(category);
        }
    });

    //return res.jsonp({ info: "create cat" });
};
exports.createCategoryObj = function (req, res) {
    console.log("create cat", req);
    var category = new Category(req.body);
    //inspection.user = req.user;

    category.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(category);
        }
    });

    //return res.jsonp({ info: "create cat" });
};


//exports.getCategoryById = function (req, res, next, id) {
//    Category.findById(id).populate('user', 'displayName').exec(function (err, need) {
//        if (err) return next(err);
//        if (!need) return next(new Error('Failed to load Need ' + id));
//        req.need = need;
//        next();
//    });
//};


exports.createCategoryItem = function (req, res) {
    console.log("create cat", req);
    var categoryItem = new CategoryItem(req.body);
    //inspection.user = req.user;

    categoryItem.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(categoryItem);
        }
    });

    //return res.jsonp({ info: "create cat" });
};

exports.createCategoryItemOption = function (req, res) {
    console.log("create categoryItemOption", req);
    var categoryItemOption = new CategoryItemOption(req.body);
    //inspection.user = req.user;

    categoryItemOption.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)
            });
        } else {
            res.jsonp(categoryItemOption);
        }
    });

    //return res.jsonp({ info: "create cat" });
};



exports.listCategory = function (req, res) {
    console.log("list cat", req);
    return res.jsonp([
            {
                info: "create cat"
            },
            {
                info: "create ca2t"
            },
            {
                info: "create cat3"
            }
        ]
    );
};









//'use strict';

///**
// * Module dependencies.
// */
//var mongoose = require('mongoose'),
//	errorHandler = require('./errors.server.controller'),
//	Need = mongoose.model('Need'),
//	_ = require('lodash');

///**
// * Create a Need
// */
//exports.create = function (req, res) {
//    var need = new Need(req.body);
//    need.user = req.user;

//    need.save(function (err) {
//        if (err) {
//            return res.status(400).send({
//                message: errorHandler.getErrorMessage(err)
//            });
//        } else {
//            res.jsonp(need);
//        }
//    });
//};

///**
// * Show the current Need
// */
//exports.read = function (req, res) {
//    res.jsonp(req.need);
//};

///**
// * Update a Need
// */
//exports.update = function (req, res) {
//    var need = req.need;

//    need = _.extend(need, req.body);

//    need.save(function (err) {
//        if (err) {
//            return res.status(400).send({
//                message: errorHandler.getErrorMessage(err)
//            });
//        } else {
//            res.jsonp(need);
//        }
//    });
//};

///**
// * Delete an Need
// */
//exports.delete = function (req, res) {
//    var need = req.need;

//    need.remove(function (err) {
//        if (err) {
//            return res.status(400).send({
//                message: errorHandler.getErrorMessage(err)
//            });
//        } else {
//            res.jsonp(need);
//        }
//    });
//};

///**
// * List of Needs
// */
//exports.list = function (req, res) {
//    Need.find().sort('-created').populate('user', 'displayName').exec(function (err, needs) {
//        if (err) {
//            return res.status(400).send({
//                message: errorHandler.getErrorMessage(err)
//            });
//        } else {
//            res.jsonp(needs);
//        }
//    });
//};

///**
// * Need middleware
// */
//exports.needByID = function (req, res, next, id) {
//    Need.findById(id).populate('user', 'displayName').exec(function (err, need) {
//        if (err) return next(err);
//        if (!need) return next(new Error('Failed to load Need ' + id));
//        req.need = need;
//        next();
//    });
//};

///**
// * Need authorization middleware
// */
//exports.hasAuthorization = function (req, res, next) {
//    if (req.need.user.id !== req.user.id) {
//        return res.status(403).send('User is not authorized');
//    }
//    next();
//};



