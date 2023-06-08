const convertToCelsius = function(tempF) {
  let newTemp = ((tempF - 32) * 5/9);
  if (newTemp % 1 !== 0) {newTemp = newTemp.toFixed(1);}
  return newTemp;
};

const convertToFahrenheit = function(tempC) {
  return ((tempC * 9/5) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
