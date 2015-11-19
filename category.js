var mongoose = require('mongoose');

var categorySchema = {
	_id: {
		type: String,
		required: true
	},
	paernt: {
		type: String,
		ref: 'Category'
	},
	anscestors: [{
		type: String,
		ref: 'Category'
	}]	
};

module.exports = new mongoose.Schema(categorySchema);
module.exports.categorySchema = categorySchema;