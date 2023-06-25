"use strict";

function not(fn) {
	return function negated(...args) {
		return !fn(...args);
	};
}

function when(fn) {
	return function(predicate) {
		return function(...args) {
			if (predicate(...args)) {
				return fn(...args);
			}
		};
	};
}


function isShortEnough(str) {
	return str.length <= 5;
}

const output = console.log.bind(console);
const isLongEnough = not(isShortEnough);
const printIf = when(output);

var msg1 = "Hello";
var msg2 = msg1 + " World";

printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
