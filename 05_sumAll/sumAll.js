const sumAll = function(arg1, arg2) {
  let sum = 0;
  let newArray = []
  for (let i = 0; i <arguments.length; i++){
    if (arguments[i] < 0 || !Number.isInteger(arguments[i])){
      return "ERROR"
    }
     else {
      newArray[i] = arguments[i]
    }
  }
  newArray.sort((a,b) => a-b)

  for (let i = newArray[0]; i <=newArray[1]; i++){
    sum += i
  }

  // sum = fullArray.reduce((acc, curr) => acc + curr)
  return sum
};

// Do not edit below this line
module.exports = sumAll;
