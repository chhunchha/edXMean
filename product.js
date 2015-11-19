var mongoose = require('mongoose');
var Category = require('./category');
var fx = require('./fx');

var productSchema = {
	name: {
		type: String,
		required: true
	},
	amount: {
		type: Number,
		required: true,
		set: function(v) {
			this.internal.approximatePriceUSD = v / (fx()[this.price.currency] || 1);
			return v;
		}
	},
	currency: {
		type: String,
		enum: ['USD', 'EUR', 'GBP'],
		required: true
	},
	category: Category.categorySchema,
	internal: {
		approximatePriceUSD: number
	}
};

var currencySymbols = {
	'USD': '$',
	'EUR': '€',
	'GBP': '£'
};

module.exports = new mongoose.Schema(productSchema);
module.exports.productSchema = productSchema;

/* 
 * Human-readable string form of price - "$25" rather 
 * than "25 USD"
 */
var schema = module.exports.productSchema;
schema.virtual('displayPrice').
	get(function() {
		return currencySymbols.[this.price.currency] + ''
		+ this.price.amount;
	});

// So virtual fields will be included in methods 
// of toObject and stringify
schema.set('toObject', {virtuals: true});
schema.set('toJSON', {virtuals: true});

