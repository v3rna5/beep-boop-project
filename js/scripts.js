//business end
var BeepBoop = function(num){
var word = [];

for(var i=0; i<=num; i++){
var results_one = i.toString();

  if (i !=0 && i % 3 === 0){
    word.push("I'm sorry, Dave. I'm afraid I can't do that");

    } else if (i === 1) {
    word.push("Boop");

    } else if (i === 0) {
    word.push("Beep")

    } else {
      word.push(i)
      //return (i)
}
}
  return word;
}

//user interface
$(document).ready(function() {
$("#numwords").submit(function(event) {
    event.preventDefault();

var userInput = $("#number").val();
console.log(userInput);
var userResults = BeepBoop(userInput);

$(".results").text(userResults);

});
});
