//Business Logic
var Words = function(num) {
var arrnumbers = [1,2,3,4,5,6,7,8,9,0]
var num;
for (var i=0; i<arrnumbers.length; i++) {
for (var j = 0; j<num.lenght; i++) {

}
}

  if ((num === 0)) {
    return $(".True").text("Beep!");;
  }
  if (( num === 1)) {
    $(".True").text("Boop!");
}
  if (( num === 3)) {
    $(".True").text("I'm sorry, Dave. I'm afraid I can't do that.");
}
}


// user interface logic
$(document).ready(function() {
  $("form#NumberToWord").submit(function(event) {
    event.preventDefault();
    var num = parseInt($("input#numbers").val());
    var result = Words(num);

    $("#resultTrue").show();
  });
});
