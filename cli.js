#!/usr/bin/env node
'use strict';
const getStdin = require('get-stdin');
const meow = require('meow');
const lpadAlign = require('.');

const cli = meow(`
	Usage
	  $ cat <file> | lpad-align

	Example
	  $ cat unicorn.txt | lpad-align
	        foo
	     foobar
	  foobarcat
`, {
	default: {
		indent: 4
	}
});

getStdin().then(data => {
	const arr = data.split(/\r?\n/);

	for (const x of arr) {
		console.log(lpadAlign(x, arr, cli.flags.indent));
	}
});
