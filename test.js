'use strict';
var test = require('ava');
var align = require('./');

test('align words', function (t) {
	var arr = [
		'foo',
		'foobar',
		'foobarcat'
	];

	arr.forEach(function (word) {
		t.assert(align(word, arr, 4).length === 13, align(word, arr, 4).length);
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
		t.assert(align(word, arr).length === 9, align(word, arr).length);
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
