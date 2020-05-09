// JavaScript Document
var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            	$this.css({
               	 	position: 'fixed',
                	bottom: -50
            });
        } else {
			$this.css({
                position: 'absolute',
                bottom: pos
            });
        }
    });
};

$('#lighthouse').followTo(-500);