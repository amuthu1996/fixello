
var l_ht = 300;
var l_wd = 775;
var value;


$(document).ready(function(){

	var height = $(window).scrollTop();
	var width = $( window ).width();
	
	if(height > l_ht && width > l_wd)
	{
	    $("#fixee").show();
	    value = true;
	    $(".head-nav").css("backgroundColor","rgba(255,87,34,1)");
	}
	else if(height < l_ht)
	{
		$("#fixee").hide();
		value = false;
	}
	
});


$(document).ready(function(){

    var height = $(window).scrollTop();
    var width = $( window ).width();
    if(height > 0 && height < l_ht && width > l_wd)
    {
    	var h = 100.0 - (40/l_ht)*height;
    	$(".head-nav").css("height", h);

    	var o = 0.3 + (0.7/l_ht)*height;
    	$(".head-nav").css("opacity", o);
    }
    else if(height > l_ht && width > l_wd)
    {
    	$(".head-nav").css("height", 60);
    	$(".head-nav").css("opacity", 1);
    }
});



$(window).scroll(function() {

	var height = $(window).scrollTop();
    var width = $( window ).width();
    if(height > 0 && height < l_ht && width > l_wd)
    {
    	var h = 100.0 - (40/l_ht)*height;
    	$(".head-nav").css("height", h);

    	var o = 0.3 + (0.7/l_ht)*height;
    	$(".head-nav").css("opacity", o);
    }
    else if(height > l_ht && width > l_wd)
    {
    	$(".head-nav").css("height", 60);
    	$(".head-nav").css("opacity", 1);
    }
	
});

$(window).scroll(function() {
	var height = $(window).scrollTop();

	    if(height > l_ht && value == false)
	    {
	        // do something
	        $("#fixee").fadeIn("slow");
	        value = true;
	    }

	    else if(height < l_ht && value == true)
	    {
	    	$("#fixee").fadeOut("slow");
	    	value = false;
	    }
});

$(document).ready(function(){ 
    //** notice we are including jquery and the color plugin at 
    //** http://code.jquery.com/color/jquery.color-2.1.0.js
    var width = $( window ).width();
    if(width > l_wd)
    {
    	var scroll_pos = 0;
	    var animation_begin_pos = 0; //where you want the animation to begin
	    var animation_end_pos = 300; //where you want the animation to stop
	    var beginning_color = new $.Color( 'rgb(0,0,0)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
	    var ending_color = new $.Color( 'rgb(255,87,34)' ); ;//what color we want to use in the end
	    $(document).scroll(function() {
	        scroll_pos = $(this).scrollTop(); 
	        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
	           // console.log( 'scrolling and animating' );
	            //we want to calculate the relevant transitional rgb value
	            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
	            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
	            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
	            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
	            var newColor = new $.Color( newRed, newGreen, newBlue );
	            //console.log( newColor.red(), newColor.green(), newColor.blue() );
	            $('.head-nav').animate({ backgroundColor: newColor }, 0);
	        } else if ( scroll_pos > animation_end_pos ) {
	             $('.head-nav').animate({ backgroundColor: ending_color }, 0);
	        } else if ( scroll_pos < animation_begin_pos ) {
	             $('.head-nav').animate({ backgroundColor: beginning_color }, 0);
	        } else { }
	    });
    }
    
});

$(window).scroll(function() {
    //** notice we are including jquery and the color plugin at 
    //** http://code.jquery.com/color/jquery.color-2.1.0.js
    var width = $( window ).width();
    if(width > l_wd)
    {
    	var scroll_pos = 0;
	    var animation_begin_pos = 0; //where you want the animation to begin
	    var animation_end_pos = 300; //where you want the animation to stop
	    var beginning_color = new $.Color( 'rgb(0,0,0)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
	    var ending_color = new $.Color( 'rgb(255,87,34)' ); ;//what color we want to use in the end
	    $(document).scroll(function() {
	        scroll_pos = $(this).scrollTop(); 
	        if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
	           // console.log( 'scrolling and animating' );
	            //we want to calculate the relevant transitional rgb value
	            var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
	            var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
	            var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
	            var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
	            var newColor = new $.Color( newRed, newGreen, newBlue );
	            //console.log( newColor.red(), newColor.green(), newColor.blue() );
	            $('.head-nav').animate({ backgroundColor: newColor }, 0);
	        } else if ( scroll_pos > animation_end_pos ) {
	             $('.head-nav').animate({ backgroundColor: ending_color }, 0);
	        } else if ( scroll_pos < animation_begin_pos ) {
	             $('.head-nav').animate({ backgroundColor: beginning_color }, 0);
	        } else { }
	    });
    }
    
});