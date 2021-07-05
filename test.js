'use strict';
const test = require('ava');
const lpadAlign = require('.');

const fixture = [
	'foo',
	'foobar',
	'foobarcat'
];

test('align words', t => {
	for (const x of fixture) {
		t.is(lpadAlign(x, fixture, 4).length, 13);
	}
});

test('align words without indent', t => {
	for (const x of fixture) {
		t.is(lpadAlign(x, fixture).length, 9);
	}
});

test('accepts a string and array', t => {
	const error1 = t.throws(() => {
		lpadAlign({});
	});

	const error2 = t.throws(() => {
		lpadAlign('foo', 'bar');
	});

	t.is(error1.message, 'Expected a `string`, got `object`');
	t.is(error2.message, 'Expected an `Array`, got `string`');
});
