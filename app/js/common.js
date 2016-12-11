$(document).ready(function() {

	// ВЫравнивание блоков по высоте
	//$(".service-item h4").equalHeights(); 
	
	$('.menu__item').click(function(){
			$('.menu__item').each(function(){
			$(this).removeClass('menu__item--active');
		});
			$(this).addClass('menu__item--active');
		});


	//Слайдер шапки
	$(".sl-header").slick({
		arrows: true,
		dots: true,
	});

	//Слайдер О НАС
	$(".sl-about").slick({
		arrows: true,
	});



	// всплывающие окна
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
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

/// акцивация меню при скроле
$(window).scroll(function(){


		var wScroll = $(this).scrollTop();
	  
		/// навигация по сайту
		if(wScroll > $('#header').offset().top - 100) {
			$('.menu li a').parent().children().removeClass('menu__item--active');
			$(".menu li a[href*=header]").addClass('menu__item--active');
		}

		if(wScroll > $('#about').offset().top - 100) {
			$('.menu li a').parent().children().removeClass('menu__item--active');
			$(".menu li a[href*=about]").addClass('menu__item--active');
		}

		if(wScroll > $('#new').offset().top - 100) {
			$('.menu li a').parent().children().removeClass('menu__item--active');
			$(".menu li a[href*=new]").addClass('menu__item--active');
		}

		if(wScroll > $('#shares').offset().top - 100) {
			$('.menu li a').parent().children().removeClass('menu__item--active');
			$(".menu li a[href*=shares]").addClass('menu__item--active');
		}

		if(wScroll > $('#reviews').offset().top - 100) {
			$('.menu li a').parent().children().removeClass('menu__item--active');
			$(".menu li a[href*=reviews]").addClass('menu__item--active');
		}

		if(wScroll > $('#registration').offset().top - 100) {
			$('.menu li a').parent().children().removeClass('menu__item--active');
			$(".menu li a[href*=registration]").addClass('menu__item--active');
		}

		if(wScroll > $('#write').offset().top - 100) {
			$('.menu li a').parent().children().removeClass('menu__item--active');
			$(".menu li a[href*=write]").addClass('menu__item--active');
		}

		if(wScroll > $('#contact').offset().top - 100) {
			$('.menu li a').parent().children().removeClass('menu__item--active');
			$(".menu li a[href*=contact]").addClass('menu__item--active');
		}



	});

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
