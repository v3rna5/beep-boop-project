$(document).ready(function() {
  $("form#numwords").submit(function(event) {
    event.preventDefault();
    var input = $("input#number").val();
    var results = "";

    for(var i=0; i<input.length; i++ ) {
	     if( input[i] === '0' ) {
		       results = "Beep";
        } else {
		        results += input[i];
        }

           if( input[i] === '1' ) {
               results = "Boop";
            } else {
                results += input[i];
            }

               if( input[i] === '3' ) {
                   results = "David";
                } else {
                    results += input[i];
                }
}




    $("#output").text(results);
    $("#output").show();
  });
});
