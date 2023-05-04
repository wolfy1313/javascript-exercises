const convertToCelsius = function(degrees) {
  let answer = (degrees - 32) * 1.8
  return Math.round(answer)
};

const convertToFahrenheit = function(degrees) {
  let answer = degrees * 1.8 + 32
  return Math.round(answer)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
