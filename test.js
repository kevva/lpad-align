'use strict';

var align = require('./');
var test = require('ava');

test('align words', function (t) {
	var arr = [
		'foo',
		'foobar',
		'foobarcat'
	];

	arr.forEach(function (word) {
		t.assert(align(word, arr, 4).length === 13);
	});

	t.end();
});

test('align words without indent', function (t) {
	var arr = [
		'foo',
		'foobar',
		'foobarcat'
	];

	arr.forEach(function (word) {
		t.assert(align(word, arr).length === 9);
	});

	t.end();
});

test('throw error if `arr` is missing', function (t) {
	try {
		align('foo');
	} catch (err) {
		t.assert(err instanceof Error);
		t.end();
	}
});
