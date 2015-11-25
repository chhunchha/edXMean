var assert = require('assert');

var superagent = require('superagent');
var express = require('express');

describe('my feature', function() {
	it('works', function() {
		assert.equal('A', 'A');
	});
	it('fails gracefully', function() {
		assert.throws(function() {
			throw 'Error!';
		});
	});
});

describe('my other feature', function() {
	it('async', function(done) {
		setTimeout(function() {
			done();
		}, 25);
	});
});


describe('server', function(){
	var server;

	beforeEach(function() {
		var app = express();
		server = app.listen(3000);
	});

	after(function() {
		server.close();
	});

	it('prints out "Hello, world" when user goes to /',
	function(done){
		superagent.get('http://localhost:3000/',
		function(error, res) {
			assert.ifError(error);
			assert.equal(res.status, 200);
			assert.equal(res.text, "Hello world!");
			done();
		});
	});
});
