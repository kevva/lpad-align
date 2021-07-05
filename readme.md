# lpad-align [![Build Status](https://travis-ci.org/kevva/lpad-align.svg?branch=master)](https://travis-ci.org/kevva/lpad-align)

> Left pad a string to align with the longest string in an array

## Install

```
$ npm install lpad-align
```

## Usage

```js
const lpadAlign = require('lpad-align');

const words = [
	'foo',
	'foobar',
	'foobarcat'
];

for (const x of words) {
	console.log(lpadAlign(x, words, 4));
}

/*
		  foo
	   foobar
	foobarcat
 */
```

## API

### lpadAlign(string, array, indent)

#### string

Type: `string`

String that will be padded.

#### array

Type: `Array`

Array to align against.

#### indent

Type: `number`\
Default: `4`

Indentation to prepend the string with.

## CLI

```
$ npm install --global lpad-align
```

```
  Usage
    $ cat <file> | lpad-align

  Example
    $ cat unicorn.txt | lpad-align
          foo
       foobar
    foobarcat
```
