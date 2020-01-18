import Calendar from './modules/calendar';
jQuery(document).ready(function($){



	// Carousel
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    items:1
	});

	// Mobile Menu Togglers
	$('.mobile_menu_opener').click(function(){
		$('.mobile_menu').addClass('visible');
	})

	$('.mobile_menu .closer').click(function(){
		$('.mobile_menu').removeClass('visible');
	})// End Mobile Menu Togglers

	// mobile menu extender on click
	$('.mobile_menu ul li').click(function(e){
		 e.preventDefault();
		$(this).find('ul').slideToggle('1000');
	})

	// Tabs
	$( "#tabs" ).tabs({
	  active: 0
	});

	 $(".btn2").click(function(e) {
	 	e.preventDefault();
	 	$("#tabs").tabs( "option", "active", 1 );
	 });


	 //Zip code validator

	 $('.zip_form').submit(function(e){
	 	e.preventDefault();
	 	var zip = parseInt($('.zip_input').val());
	 	console.log(zip);
	 	let zip_array = [43002,43004,43016,43017,43026,43054,43068,43081,43085,43086,43109,43110,43119,43123,43125,43126,43201,43202,43203,43204,43205,43206,43207,43209,43210,43211,43212,43213,43214,43215,43216,43217,43218,43219,43220,43221,43222,43223,43224,43226,43227,43228,43229,43230,43231,43232,43234,43235,43236];
	 	if(zip_array.includes(zip)){
	 		let show_form = true;
	 	}else{
	 		alert('Not exists!');
	 	}
	 }) // End Zip validator

	 $( "#datepicker" ).datepicker();


	 // Calendar
     var calendar  = new Calendar();


})// Document ready function
