const repeatString = function (repeat, times) {
	if (times < 0) {
		return "ERROR";
	}
	let result = "";
	for (times; times > 0; times--) {
		result += repeat;
	}
	return result;
};

// Do not edit below this line
module.exports = repeatString;
