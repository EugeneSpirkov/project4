//= partials/slider.js

$(document).ready(function(){
 
	$('#toggle-menu').click(function() {  //animate toggle menu
		$('.toggle-menu-wrap').animate({ 
            left: '0px', 
        }, 500); 
        $('.toggle-bg').animate({
        	left: '0',
        }, 1);
	})
	$('#toggle-menu__logo-icon').click(function() {  //hide toggle menu
		$('.toggle-menu-wrap').animate({ 
            left: '-320px', 
        }, 500),
        $('.toggle-bg').animate({
        	left: '-100%',
        }, 1);
	})
	$('.toggle-bg').click(function() {  //hide toggle menu
		$('.toggle-menu-wrap').animate({ 
            left: '-320px', 
        }, 500),
        $('.toggle-bg').animate({
        	left: '-100%',
        }, 1);
	})
 
});


