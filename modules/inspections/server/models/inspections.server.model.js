'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;



//var mongoose = require('./index')
//  , TempSchema = new mongoose.Schema({
//      salutation: { type: String, enum: ['Mr.', 'Mrs.', 'Ms.'] }
//  });

//var Temp = mongoose.model('Temp', TempSchema);

//console.log(Temp.schema.path('salutation').enumValues);
//var temp = new Temp();
//console.log(temp.schema.path('salutation').enumValues);
var AddressSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    addressType: { type: String, enum: ['Property Address', 'Primary Address', 'Alternate Address'] },
    address1: {
        type: String,
        default: '',
        trim: true,
        required: 'Address1 cannot be blank'
    },
    address2: {
        type: String
    },
    city: {
        type: String,
        default: '',
        trim: true,
        required: 'City cannot be blank'
    },
    addressState: {
        type: String,
        default: '',
        trim: true,
        required: 'Address State cannot be blank'
    },
    zip: {
        type: String,
        default: '',
        trim: true,
        required: 'Zip cannot be blank'
    }
});


mongoose.model('Address', AddressSchema);

var CategoryItemOptionSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    categoryItemOptionName: {
        type: String,
        default: '',
        trim: true,
        required: 'CategoryItemOptionName cannot be blank'
    },
    _parent: {
        type: Number,
        ref: 'CategoryItem'
    },
    selected: {
        type: Boolean,
        default: false,
        required: 'Selected cannot be blank'
    }
});
mongoose.model('CategoryItemOption', CategoryItemOptionSchema);

var CategoryItemSchema  = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    categoryItemName: {
        type: String,
        default: '',
        trim: true,
        required: 'CategoryItemName cannot be blank'
    },
    _parent: {
        type: Number,
        ref: 'Category'
    },
    categoryItemOptions: [CategoryItemOptionSchema]
});
mongoose.model('CategoryItem', CategoryItemSchema);

var CategorySchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    categoryName: {
        type: String,
        default: '',
        trim: true,
        required: 'CategoryName cannot be blank'
    },
    categoryItems: [CategoryItemSchema]
});

mongoose.model('Category', CategorySchema);



/**
 * Inspections Schema
 */
var InspectionTemplateSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    categories: [CategorySchema],
    propertyAddress1: {
        type: String,
        default: '<empty>'
    },
    propertyAddress2: {
        type: String,
        default: '<empty>'
    },
    propertyAddressCity: {
        type: String,
        default: '<empty>'
    },
    propertyAddressState: {
        type: String,
        default: '<empty>'
    },
    propertyAddressZip: {
        type: String,
        default: '<empty>'
    },
    ownerAddress1: {
        type: String,
        default: '<empty>'
    },
    ownerAddress2: {
        type: String,
        default: '<empty>'
    },
    ownerAddressCity: {
        type: String,
        default: '<empty>'
    },
    ownerAddressState: {
        type: String,
        default: '<empty>'
    },
    ownerAddressZip: {
        type: String,
        default: '<empty>'
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('InspectionTemplate', InspectionTemplateSchema);


/**
 * Inspections Schema
 */
var InspectionSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: 'Title cannot be blank'
    },
    template: InspectionTemplateSchema,
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

mongoose.model('Inspection', InspectionSchema);
