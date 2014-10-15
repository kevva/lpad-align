'use strict';

var lpad = require('lpad');
var max = require('max-component');

/**
 * Left pad a string to align with the longest string in an array
 *
 * @param {String} str
 * @param {Array} arr
 * @param {Number} indent
 * @api public
 */

module.exports = function (str, arr, indent) {
	var len = max(arr, '.length');
	return lpad(str, new Array(indent + len - str.length).join(' '));
};
