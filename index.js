'use strict';
const indentString = require('indent-string');
const longest = require('longest');

module.exports = (str, arr, indent) => {
	if (typeof str !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof str}\``);
	}

	if (!Array.isArray(arr)) {
		throw new TypeError(`Expected an \`Array\`, got \`${typeof arr}\``);
	}

	return indentString(str, (indent || 0) + longest(arr).length - str.length);
};
