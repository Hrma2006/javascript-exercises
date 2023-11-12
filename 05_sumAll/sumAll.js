const sumAll = function (from, to) {
	let sum = 0;
	if (typeof from != typeof sum || typeof to != typeof sum) {
		return "ERROR";
	}
	else if (from < 0 || to < 0) {
		return "ERROR";
	} else if (from < to) {
		for (from; from <= to; from++) {
			sum += from;
		}
		return sum;
	} else if (from > to) {
		for (to; to <= from; to++) {
			sum += to;
		}
		return sum;
	} 
};

// Do not edit below this line
module.exports = sumAll;
