// Business Logic
function NumToWord(str){
 //var vowels = ['beep', 'boop', 'sentence']
  var number = ["1", "2", "3", "4", "5", "6", "7", "8","9","0"]
  //var strarr = str.split("");
  //var index;
  //var str;
  for(var i = 0; i < number.length; i++){
    //for(var j = 0; j < vowels.length; j++){

      if(number[i] != number[0] {
    var sliced = str.slice(0, index);
    str = str.slice(index) + sliced + "beep";
  }else{
    str = str + "way";
  }
$(".Resulting").text(str);
  }


// User Logic
$(document).ready(function(){
  $("#BeepBoop").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#numbers").val());
    var userResult = NumToWord(userInput);
    $("#result").show();
  });
});
