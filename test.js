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

test('throw error if `arr` is missing', t => {
	t.throws(m.bind(null, 'foo'), '`arr` is required');
});
