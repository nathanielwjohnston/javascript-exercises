const add = function(a,b) {
  return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, item) => {
    return sum + item;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((sum, item) => {
    return sum * item;
  })
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(num) {
  result = 1;

	for (let i = 2; i <= num; i++) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
