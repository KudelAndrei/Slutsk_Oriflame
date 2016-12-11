$(document).ready(function() {

	// ВЫравнивание блоков по высоте
	//$(".service-item h4").equalHeights(); 


	var cbpFixedScrollLayout = (function() {

	// cache and initialize some values
	var config = {
		// the cbp-fbscroller´s sections
		$sections : $( '.panel-right > section' ),
		// the navigation links
		$navlinks : $( '.menu__item' ),
		// index of current link / section
		currentLink : 0,
		// the body element
		$body : $( 'html, body' ),
		// the body animation speed
		animspeed : 650,
		// the body animation easing (jquery easing)
		animeasing : 'easeInOutExpo'
	};

	function init() {

		// click on a navigation link: the body is scrolled to the position of the respective section
		config.$navlinks.on( 'click', function() {
			scrollAnim( config.$sections.eq( $( this ).index() ).offset().top );
			return false;
		} );

			// 2 waypoints defined:
			// First one when we scroll down: the current navigation link gets updated. 
			// A `new section´ is reached when it occupies more than 70% of the viewport
			// Second one when we scroll up: the current navigation link gets updated. 
			// A `new section´ is reached when it occupies more than 70% of the viewport
			config.$sections.waypoint( function( direction ) {
				if( direction === 'down' ) { changeNav( $( this ) ); }
			}, { offset: '30%' } ).waypoint( function( direction ) {
				if( direction === 'up' ) { changeNav( $( this ) ); }
			}, { offset: '-30%' } );

			// on window resize: the body is scrolled to the position of the current section
			$( window ).on( 'debouncedresize', function() {
				scrollAnim( config.$sections.eq( config.currentLink ).offset().top );
			} );
			
		}

		// update the current navigation link
		function changeNav( $section ) {
			config.$navlinks.eq( config.currentLink ).removeClass( 'menu__item--active' );
			config.currentLink = $section.index( 'section' );
			config.$navlinks.eq( config.currentLink ).addClass( 'menu__item--active' );
		}

		// function to scroll / animate the body
		function scrollAnim( top ) {
			config.$body.stop().animate( { scrollTop : top }, config.animspeed, config.animeasing );
		}

		return { init : init };

	})();


	/*
	$('.menu__item').click(function(){
		$('.menu__item').each(function(){
			$(this).removeClass('menu__item--active');
		});
		$(this).addClass('menu__item--active');
	});
	*/

	/*
	//плавный скролл
	$(".menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000 );

	});
	*/

	//Слайдер 
	$(".sl-header").slick({
		arrows: true,
		dots: true,
	});

	//плавный скрол в хроме
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {
	};


});
