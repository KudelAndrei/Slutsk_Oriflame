$(document).ready(function() {

	// ВЫравнивание блоков по высоте
	$(".registration-advan__item").equalHeights(); 
	

	/// плитки
	$(".mixblock").mixItUp();


	// mobile menu
	$('.menu__item').click(function(){
			$('.menu__item').each(function(){
			$(this).removeClass('menu__item--active');
		});
			$(this).addClass('menu__item--active');
		});

	// мобильное меню
	$(".toggle-menu").click(function(){
		$(this).toggleClass("on");
		$(".menu-mobile").slideToggle();
	});

	$(".menu__item").click(function(){
		$('.menu-mobile').slideToggle();
		$(".toggle-menu").toggleClass("on");
	});

	/// tab
	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// открытие регистрации
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
	//	focus: '#name',
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});

	//Слайдер шапки
	$(".sl-header").slick({
		arrows: true,
		dots: true,
		dotsClass: "slick-dots", //указываем класс и стилизуем точки
		prevArrow: '<div class="sl-arrow sl-arrow__left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', // можем вставить любой элемент 
		nextArrow: '<div class="sl-arrow sl-arrow__right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>', //по дефолту
	});

	//Слайдер О НАС
	$(".sl-about").slick({
		arrows: true,
		prevArrow: '<div class="sl-arrow sl-arrow__left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', // можем вставить любой элемент 
		nextArrow: '<div class="sl-arrow sl-arrow__right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>', //по дефолту
	});

	//Слайдер ОТЗЫВЫ
	$(".sl-reviews").slick({
		arrows: true,
		prevArrow: '<div class="sl-arrow sl-arrow__left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>', // можем вставить любой элемент 
		nextArrow: '<div class="sl-arrow sl-arrow__right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>', //по дефолту
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
