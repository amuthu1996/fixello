
var value;

$(document).ready(function(){

	var height = $(window).scrollTop();

	if(height > 300)
	{
	    $("#fixee").show();
	    value = true;
	}

	else
	{
		$("#fixee").hide();
		value = false;
	}
	
});


$(window).scroll(function() {
	var height = $(window).scrollTop();

	    if(height > 300 && value == false)
	    {
	        // do something
	        $("#fixee").fadeIn("slow");
	        value = true;
	    }

	    else if(height < 300 && value == true)
	    {
	    	$("#fixee").fadeOut("slow");
	    	value = false;
	    }
});