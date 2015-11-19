var mongoose = require('mongoose');
var Types = require('./types')

var userSchema = {
	profile: {
		username: {
			type: String,
			required: true,
			lowercase: true
		},
		picture: {
			type: String,
			required: true,
			match: /^http:\/\//i
		}
	},
	data: {
		oauth: {
			type: String,
			required: true
		},
		cart: [{
			product: {
				type: Types.ObjectId
			},
			quantity: {
				type: Number,
				default: 1,
				min: 1
			}
		}]
	}
};

module.exports = new Mongoose.Schema(userSchema);
module.exports.userSchema = userSchema;