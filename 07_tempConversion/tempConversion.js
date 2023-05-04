const convertToCelsius = function(degrees) {
  let answer = (degrees - 32) * .5556
  return parseFloat(answer.toFixed(1))
};

const convertToFahrenheit = function(degrees) {
  let answer = degrees * 1.8 + 32
  return parseFloat(answer.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
