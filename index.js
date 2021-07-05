'use strict';
const indentString = require('indent-string');
const longest = require('longest');

module.exports = (string, array, indent) => {
	const pad = typeof indent === 'number' ? indent : 0;

	if (typeof string !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
	}

	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an \`Array\`, got \`${typeof array}\``);
	}

	return indentString(string, pad + longest(array).length - string.length);
};
