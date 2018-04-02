//business end
$(document).ready(function() {
$("form#numwords").submit(function(event) {
    event.preventDefault();

var input = $("input#number").val();
var results = "";
var numbers = "";


//front end
for(var i=0; i<input.length; i++){

	 if (input[0] === "0") {
	    results =  "Beep!";
      $("#output").text(results);

} else {


}

  if (input[0] === '1') {
      results = "Boop!";
      $("#output").text(results);



} else {

}
   if(input[0] === '3') {
      results =  "I'm sorry, Dave. I'm afraid I can't do that.";
      $("#output").text(results);

} else {

}

}








    $("#output").text(results += input);
    $("#output").show();

  });
    });
