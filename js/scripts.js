var factorial = function(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else if (number > 1) {
    return number * factorial(number - 1);
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#input-number").submit(function(event) {
    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $(".number").text(number);
    $(".factorial").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
