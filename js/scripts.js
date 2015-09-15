var factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else if (number > 1) {
    return number * factorial(number - 1);
  } else {
    return false;
  }
};
