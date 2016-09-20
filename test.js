import test from 'ava';
import m from './';

const fixture = [
	'foo',
	'foobar',
	'foobarcat'
];

test('align words', t => {
	for (const x of fixture) {
		t.is(m(x, fixture, 4).length, 13);
	}
});

test('align words without indent', t => {
	for (const x of fixture) {
		t.is(m(x, fixture).length, 9);
	}
});

test('check arguments', t => {
	t.throws(m.bind(null, {}), 'Expected a `string`, got `object`');
	t.throws(m.bind(null, 'abc', 'abc'), 'Expected an `Array`, got `string`');
});
