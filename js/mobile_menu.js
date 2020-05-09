// JavaScript Document
$(document).ready(function() {
			var i = 0;
			$(".mobile-icon").click(function(event){
				event.preventDefault();
    			if(i == 0) {
        			$(".mobile-menu").stop().animate({right:'0%'},250);
        			i = 1;
    			} else {
        			$(".mobile-menu").stop().animate({right:'-100%'},250);
        			i = 0;	
				}
				});
		});