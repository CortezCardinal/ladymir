$( "#btnup" ).click(function() 
{
   $('html, body').animate(
	   {
	        scrollTop: $("body").offset().top - 180
	   }, 500);
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) 
    {
        $("#btnup").addClass("button-top--active");
    } 
    else 
    {
        $("#btnup").removeClass("button-top--active");
    }
});
 