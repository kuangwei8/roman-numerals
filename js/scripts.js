$(document).ready(function(){

var toRoman = function (userInput) {
  var result = '';
  var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
  for (var i = 0;i<=decimal.length;i++) {
    while (userInput%decimal[i] < userInput) {
      result += roman[i];
      userInput -= decimal[i];
    }
  }
  return result;
}



$("form").submit(function(event){
  event.preventDefault();
  var userInput = parseInt($("#numbers").val());
  var result = toRoman(userInput);
  $("#output").text(result);

  });
});
