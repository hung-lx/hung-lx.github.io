$(document).ready(function(){

	var widthWindow = $(window).width();
	var heightWindow = $(window).height();

	// WOW js
	// new WOW().init();
	wow = new WOW(
		{
			mobile: false
		}
	);
	wow.init();


	// Stellar - Parallax scrolling
	$.stellar();


	// MsDropdown
	$('.js-select-language').msDropDown();


	// Slick
	$('.js-testimonial-slider').slick({
		dots: true,
		arrows: false,
		speed: 500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 6000,
		cssEase: 'linear'
	});


	// Menu mobile
	$("#menu-mobile").mmenu();


	//Check to see if the window is top if not then display `fixed scroll`
	var heightHeader = $('.header').height();
	var heightBannerSmall = $('.banner-small').height();
	var heightSum = heightHeader + heightBannerSmall;

	$(window).scroll(function(){
		if ($(this).scrollTop() > heightSum) {
			$('.fixed-scroll').fadeIn(300);
		} else {
			$('.fixed-scroll').fadeOut(300);
		}
	});


	// Slider carousel
	$('.js-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	// Slider photo
	$('.js-slider-photo').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
		autoplaySpeed: 6000,
		cssEase: 'linear'
	});


	// Magnific popup
	$(".js-popup-youtube").magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		disableOn: function() {
			if( $(window).width() < 0 ) {
				return false;
			}
			return true;
		},
		iframe: {
			markup: '<div class="mfp-iframe-scaler">'+
						'<div class="mfp-close"></div>'+
						'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
						'<div class="mfp-title">Some caption</div>'+
					  '</div>'
		},
		callbacks: {
			markupParse: function(template, values, item) {
				values.title = item.el.attr('title');
			}
		}
	});


	// Map tabs
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var that = $($(e.target).attr('href')).find('.map');
		if(!that.find('iframe').length){
		that.append($('<iframe/>',{src:that.data('map')})
			.css({height:'350px',width:'100%',border:'none'}));
		}
	}).first().trigger('shown.bs.tab');

});


$(window).resize(function(){

	var widthWindow = $(window).width();
	var heightWindow = $(window).height();

});

// |++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// |
// | Function for page load and resize
// |++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++