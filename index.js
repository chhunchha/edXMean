// * Introduction to MongoDB and Node.js
//********************************************

// var mongodb = require('mongodb');

// var uri = 'mongodb://localhost:27017/example';

// mongodb.MongoClient.connect(uri, function(error, db) {
// 	if(error) {
// 		console.log(error);
// 		process.exit(1);
// 	}

// 	db.collection('sample').insert({x: 1}, function(error, result) {
// 		if(error) {
// 			console.log(error);
// 			process.exit(1);
// 		}
// 		db.collection('sample').find().toArray(function(error, docs) {
// 			if(error) {
// 				console.log(error);
// 				process.exit(1);
// 			}
		
// 			console.log('Found docs:');
// 			docs.forEach(function(doc){
// 				console.log(JSON.stringify(doc));
// 			});
// 			process.exit(0);
// 		});
// 	});
// });

// MongoDB Schema Design
// *************************


var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

// parameters are: model name, schema, collection name
var User = mongoose.model('User', schema, 'users');

var user = new User({
	name: 'Sumant Chhunchha',
	email: "mr.chhunchha@gmail.com"
});

user.save(function(error){
	if(error) {
		console.log(error);
		process.exit(1);
	}
	User.find({email: 'mr.chhunchha@gmail.com'}, function(error, docs){
		if(error) {
			console.log(error);
			process.exit(1);
		}
		console.log(require('util').inspect(docs));
		process.exit(0);
	});
});

