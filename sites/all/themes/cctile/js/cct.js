// JavaScript Document

jQuery(function($) {
// ---------------------------------------------------------------------------------------------


// mobile nav
$('.mobile-nav-activate').on('click', function(e){
	e.preventDefault();
	$('.mobile-nav').toggleClass('is-active');
});

$('.mobile-nav-close').on('click', function(e){
	e.preventDefault();
	$('.mobile-nav').removeClass('is-active');
});


// --------------------------------------------- owl slider for product photos --
$(".testimonials-listing-homepage .view-content").owlCarousel({
	items: 1,
	singleItem: true,
	loop: true,
	nav: true,
	navText:[
		"<i class='fa fa-angle-left fa-2x'></i>",
		"<i class='fa fa-angle-right fa-2x'></i>"
	]
});


// ---------------------------------------------------------------------------------------------
});