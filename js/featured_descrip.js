// JavaScript Document
$(document).ready(function() {
	$(".ft-flavor").on('click', function(event) {
		event.preventDefault();
		$(this).toggleClass('rotated');
        $(this).closest('.ft-flavor').find('p').slideToggle("slow");
	});
});// JavaScript Document