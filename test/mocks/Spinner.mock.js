'use strict';
var defaultSpinnerString = 0;
var defaultSpinnerDelay = 60;

var Spinner = function(textToShow){
	this.text = textToShow || '';
	this.setSpinnerString(defaultSpinnerString);
	this.setSpinnerDelay(defaultSpinnerDelay);
	this.running = false;
};

Spinner.spinners = [
	'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'
];

Spinner.setDefaultSpinnerString = function(value) {
	defaultSpinnerString = value;
};

Spinner.setDefaultSpinnerDelay = function(value) {
	defaultSpinnerDelay = value;
};

Spinner.prototype.start = function() {
	this.running = true;
};

Spinner.prototype.setSpinnerDelay = function(n) {
	this.delay = n;
};

Spinner.prototype.setSpinnerString = function(str) {
	this.chars = mapToSpinner(str, this.spinners).split('');
};

Spinner.prototype.stop = function() {
	this.running = false;
};

// Helpers

function isInt(value) {
	return (typeof value==='number' && (value%1)===0);
}

function mapToSpinner(value) {
	// Not an integer, return as strng
	if (!isInt(value)) {
		return value + '';
	}

	// Check if index is within bounds
	value = (value >= Spinner.spinners.length) ? 0 : value;
	// If negative, count from the end
	value = (value < 0) ? Spinner.spinners.length + value : value;

	return Spinner.spinners[value];
}

exports.Spinner = Spinner;
