const convertToCelsius = function(toCelsius) {
  let conversion = (toCelsius - 32) * 5/9;
  return Math.round(conversion * 10)/10; 
};

console.log(convertToCelsius(32));

const convertToFahrenheit = function(toFahrenheit) {
  let convert = (toFahrenheit * 9/5 + 32);
  return Math.round(convert * 10)/10;
};
console.log(convertToFahrenheit(0));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
