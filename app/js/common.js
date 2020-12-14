// Price changer

// $(function() {

// 	function nextMsg(i) {
// 		if (messages.length == i) {
// 			i = 0;
// 		}
// 		$('#message').html(messages[i]).fadeIn(500).delay(2000).fadeOut(500, function() {
// 			nextMsg(i + 1);
// 		});
// 	};

// 	var messages = [
// 	"25л: <span>6 650грн</span>&nbsp;<strong>5 750</strong> грн",
// 	"35л: <span>7 150грн</span>&nbsp;<strong>6 250</strong> грн",
// 	"50л: <span>7 650грн</span>&nbsp;<strong>6 750</strong> грн"
// 	];

// 	$('#message').hide();

// 	nextMsg(0);

// });

// $(function() { // fridayblack

// 	// When the user scrolls the page, execute myFunction
// 	window.onscroll = function() {myFunction()};

// 	// Get the navbar
// 	var wehave = document.getElementById("header-text");
// 	var navbar = document.getElementById("navbar");

// 	// Get the offset position of the navbar
// 	var showMenu = wehave.offsetTop;

// 	// Add the sticky class to the navbar
// 	function myFunction() {
// 		if (window.pageYOffset >= showMenu) {
// 			navbar.classList.add("showMenu")
// 		} else {
// 			navbar.classList.remove("showMenu");
// 		}
// 	}

// });

// Modal Control - Book

$(function() {

	var modal = $('#book.modal-mask');

	$('.recipe-btn').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW1' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Catalog 

$(function() {

	var modal = $('#catalog.modal-mask');

	$('.buy-btn').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW2' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Catalog

$(function() {

	var modal = $('#bonus.modal-mask');

	$('.bonus-btn').on('click', function(event) {
		event.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW6' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Header

$(function() {

	var modal = $('#header-modal.modal-mask');

	$('#menu .btnHead').on('click', function(e) {
		e.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW3' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Black friday

// $(function() { // fridayblack

// 	var modal = $('#blackfriday-modal.modal-mask');

// 	$('.bf-text-block .bf-btn').on('click', function(e) {
// 		e.preventDefault();
// 		modal.removeClass('hide');
// 	});

// 	$('.modal-close').on('click', function() {
// 		modal.addClass('hide');
// 	});

// 	$(document).on('click', function(event) {
// 		if ( event.target.id == 'mW3' ) {
// 			modal.addClass('hide');
// 		}
// 	});

// });

// Modal Control - About

$(function() {

	var modal = $('#about-modal.modal-mask');

	$('#aboutBtn').on('click', function(e) {
		e.preventDefault();
		modal.removeClass('hide');
	});

	$('.modal-close').on('click', function() {
		modal.addClass('hide');
	});

	$(document).on('click', function(event) {
		if ( event.target.id == 'mW4' ) {
			modal.addClass('hide');
		}
	});

});

// Modal Control - Additionally

$(function() {

	var modal = $('#additionally-modal.modal-mask'),
	addPrice = $('#additionally-modal #modal-value-add'),
	addTextm = $('#additionally-modal #modal-text-add')
	hiddenComAdd = $('#additionally-modal [name="DATA[COMMENTS]"]');
		// console.log(hiddenComAdd);

		$('#carga, #komplOhl, #areom, #rashiga, #popugai, #dioptr, #ugol, #regMosh, #ten').on('click', function(e) {
			e.preventDefault();
		// $(this).addClass('active');
		modal.removeClass('hide');

		if ( $(this).attr('id') == 'carga' ) {
			addPrice.text('1 190₴');
			addTextm.text('Дополнительная царга с сеткой Панченкова');
			hiddenComAdd.val('Дополнительная царга с сеткой Панченкова');
			// console.log('carga');
		} else if ( $(this).attr('id') == 'dioptr' ) {
			addPrice.text('1 590₴');
			addTextm.text('Инновационный диоптр 4 в 1');
			hiddenComAdd.val('Инновационный диоптр 4 в 1');
			// console.log('dioptr');
		} else if ( $(this).attr('id') == 'popugai' ) {
			addPrice.text('690₴');
			addTextm.text('Непрерывный контроль крепости (Попугай)');
			hiddenComAdd.val('Непрерывный контроль крепости (Попугай)');
			// console.log('popugai');
		} else if ( $(this).attr('id') == 'rashiga' ) {
			addPrice.text('710₴');
			addTextm.text('Кольца Рашига 1 кг');
			hiddenComAdd.val('Кольца Рашига 1 кг');
			// console.log('rashiga');
		} else if ( $(this).attr('id') == 'areom' ) {
			addPrice.text('450₴');
			addTextm.text('Набор профессиональных ареометров и мерная колба');
			hiddenComAdd.val('Набор профессиональных ареометров и мерная колба');
			// console.log('areom');
		} else if ( $(this).attr('id') == 'komplOhl' ) {
			addPrice.text('750₴');
			addTextm.text('Комплект охлождения ДеЛюкс');
			hiddenComAdd.val('Комплект охлождения ДеЛюкс');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'ugol' ) {
			addPrice.text('750₴');
			addTextm.text('Угольная колонна AquaGradus');
			hiddenComAdd.val('Угольная колонна AquaGradus');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'regMosh' ) {
			addPrice.text('1 550₴');
			addTextm.text('Регулятор мощности нагрева АГ-2');
			hiddenComAdd.val('Регулятор мощности нагрева АГ-2');
			// console.log('drogi');
		} else if ( $(this).attr('id') == 'ten' ) {
			addPrice.text('250₴');
			addTextm.text('Водяной ТЭН для самогонного аппарат');
			hiddenComAdd.val('Водяной ТЭН для самогонного аппарат');
			// console.log('drogi');
		};
	});

		$('.modal-close').on('click', function() {
			modal.addClass('hide');
		});

		$(document).on('click', function(event) {
			if ( event.target.id == 'mW5' ) {
				modal.addClass('hide');
			}
		});

	});

// Date Today

$(function() {

	var dateNow = new Date(),
	todayInner = $('.today');
	// dateNow.toDateString();
	function formatDate(date) {

		var dd = date.getDate();
		if (dd < 10) dd = '0' + dd;

		var mm = date.getMonth() + 1;
		if (mm < 10) mm = '0' + mm;

		return dd + '.' + mm;
	};

	todayInner.text(formatDate(dateNow));
	// console.log(formatDate(dateNow));
});

// Characteristics Control

$(function() {

	var litreVal = $('.litre-val'),
	bkVal = $('.bk-val'),
	carVal = $('.car-val'),
	suhVal = $('.suh-val'),
	charImg = $('.char-img img'),
	weight = $('#weight'),
	inTank = $('#inTank'),
	cleanSpirt = $('#cleanSpirt'),
	inside = $('#inside'),
	insideButle = $('#insideButle');

	var twentyTank = {
		urlA: 'img/20/20.jpg',
		urlC: 'img/20/20c.jpg',
		urlS: 'img/20/20s.jpg',
		urlCs: 'img/20/20cs.jpg',
		urlT: 'img/20/tank-20.jpg',
		weightA: '8 кг',
		weightC: '9 кг',
		weightS: '10 кг',
		weightCs: '11 кг',
		weightT: '5 кг',
		inTank: '20 л',
		cleanSpirt: '2 л',
		inside: '5.0 л',
		insideButle: '10 бутылок по 0.5'
	};

	var thirtyTank = {
		urlA: 'img/30/30.jpg',
		urlC: 'img/30/30c.jpg',
		urlS: 'img/30/30s.jpg',
		urlCs: 'img/30/30cs.jpg',
		urlT: 'img/30/tank-30.jpg',
		weightA: '10 кг',
		weightC: '11 кг',
		weightS: '12 кг',
		weightCs: '13 кг',
		weightT: '7 кг',
		inTank: '30 л',
		cleanSpirt: '3 л',
		inside: '7.5 л',
		insideButle: '15 бутылок по 0.5'
	};

	var fiftyTank = {
		urlA: 'img/50/50.jpg',
		urlC: 'img/50/50c.jpg',
		urlS: 'img/50/50s.jpg',
		urlCs: 'img/50/50cs.jpg',
		urlT: 'img/50/tank-50.jpg',
		weightA: '12 кг',
		weightC: '13 кг',
		weightS: '14 кг',
		weightCs: '15 кг',
		weightT: '9 кг',
		inTank: '38 л',
		cleanSpirt: '3.8 л',
		inside: '9.5 л',
		insideButle: '19 бутылок по 0.5'
	};

	// Litre 'Click' handler

	$(litreVal).on('click', function (event) {

		event.preventDefault();

		$(this).addClass('active').siblings().removeClass('active');

		var dataTank = $('a.litre-val.active').attr('data-tank');

		if ( bkVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlT') );
			weight.text( eval (dataTank + '.weightT') );
		} else if ( suhVal.hasClass('active')  && carVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlCs') );
			weight.text( eval (dataTank + '.weightCs') );
		} else if ( suhVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlS') );
			weight.text( eval (dataTank + '.weightS') );
		} else if ( carVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlC') );
			weight.text( eval (dataTank + '.weightC') );
		} else {
			charImg.attr('src', eval (dataTank + '.urlA') );
			weight.text( eval (dataTank + '.weightA') );
		};
		
		inTank.text( eval (dataTank + '.inTank') );
		cleanSpirt.text( eval (dataTank + '.cleanSpirt') );
		inside.text( eval (dataTank + '.inside') );
		insideButle.text( eval (dataTank + '.insideButle') );

	});

	// Tank 'Click' handler

	$(bkVal).on('click', function (event) {

		event.preventDefault();

		var dataTank = $('a.litre-val.active').attr('data-tank');

		charImg.attr('src', eval (dataTank + '.urlT') );
		weight.text( eval (dataTank + '.weightT') );
		$('.carSuh').addClass('hide');
		$(this).toggleClass('active');
		if ( bkVal.hasClass('active') ) {
			$(this).text('Аппарат в сборе');
		} else {
			$(this).text('Бак отдельно');
			charImg.attr('src', eval (dataTank + '.urlA') );
			weight.text( eval (dataTank + '.weightA') );
			$('.carSuh').removeClass('hide');
		};

	});

	// Carga 'Click' handler

	$(carVal).on('click', function (event) {

		event.preventDefault();

		var dataTank = $('a.litre-val.active').attr('data-tank');

		if ( suhVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlCs') );
			weight.text( eval (dataTank + '.weightCs') );
		} else {
			charImg.attr('src', eval (dataTank + '.urlC') );
			weight.text( eval (dataTank + '.weightC') );
		};

		$(this).toggleClass('active');

		if ( carVal.hasClass('active') ) {
			$(this).html('<span>-</span> царга');
		} else {
			$(this).html('<span>+</span> царга');

			if ( suhVal.hasClass('active') ) {
				charImg.attr('src', eval (dataTank + '.urlS') );
				weight.text( eval (dataTank + '.weightS') );
			} else {
				charImg.attr('src', eval (dataTank + '.urlA') );
				weight.text( eval (dataTank + '.weightA') );
			};
		};

	});

	// Suhoparnik 'Click' handler

	$(suhVal).on('click', function (event) {

		event.preventDefault();

		var dataTank = $('a.litre-val.active').attr('data-tank');

		if ( carVal.hasClass('active') ) {
			charImg.attr('src', eval (dataTank + '.urlCs') );
			weight.text( eval (dataTank + '.weightCs') );
		} else {
			charImg.attr('src', eval (dataTank + '.urlS') );
			weight.text( eval (dataTank + '.weightS') );
		};

		$(this).toggleClass('active');

		if ( suhVal.hasClass('active') ) {
			$(this).html('<span>-</span> сухопарник');
		} else {
			$(this).html('<span>+</span> сухопарник');

			if ( carVal.hasClass('active') ) {
				charImg.attr('src', eval (dataTank + '.urlC') );
				weight.text( eval (dataTank + '.weightC') );
			} else {
				charImg.attr('src', eval (dataTank + '.urlA') );
				weight.text( eval (dataTank + '.weightA') );
			};
		};

	});


});

// Constructor

$(function() {
	
	var litreVl = $('.litre-vl'),
	formValue = $('#form-value, #modal-value'),
	formOld = $('#form-old'),
	imgConstr = $('.constructor-img'),
	mtextValue = $('#modal-text-value'),
	colVal = $('#col-val'),
	bakVal = $('#bak-val'),
	buyBtn = $('.btn.constr-btn.buy-btn'),
	modalBtn = $('.btn.modal-btn.modal-btn--buy'),
	hiddenComment = $('[name="DATA[COMMENTS]"]');
	// console.log(hiddenComment);

	var arrCompl = $('.compl-item');

	$(litreVl).on('click', function (e) {

		e.preventDefault();

		$(litreVl).removeClass('active');
		$(this).addClass('active');

		var dataTk = $('a.litre-vl.active').attr('data-tank');

		if ( bakVal.hasClass('active') ) {
			formOld.hide();
			if ( dataTk == 'twentyTk' ) {
				formValue.text('2 700₴');
				imgConstr.css({
					background: 'url(/img/constructor/20l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Стандарт на 25л');
				hiddenComment.val('Бак Aquagradus Стандарт на 25л');
				// console.log(hiddenComment.val());
			} else if ( dataTk == 'thirtyTk' ) {
				formValue.text('3 200₴');
				imgConstr.css({
					background: 'url(/img/constructor/30l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Стандарт на 35л');
				hiddenComment.val('Бак Aquagradus Стандарт на 35л');
			} else if ( dataTk == 'fiftyTk' ) {
				formValue.text('3 700₴');
				imgConstr.css({
					background: 'url(/img/constructor/50l-nocolumn_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Бак Aquagradus Стандарт на 50л');
				hiddenComment.val('Бак Aquagradus Стандарт на 50л');
			};
		} else {
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
			formOld.show();

			if ( dataTk == 'twentyTk' ) {
				formOld.text('7 150₴');
				formValue.text('6 450₴');
				imgConstr.css({
					background: 'url(/img/constructor/20l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 25л');
				hiddenComment.val('Самогонный аппарат с баком на 25л');
			} else if ( dataTk == 'thirtyTk' ) {
				formOld.text('7 650₴');
				formValue.text('6 950₴');
				imgConstr.css({
					background: 'url(/img/constructor/30l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 35л');
				hiddenComment.val('Самогонный аппарат с баком на 35л');
			} else if ( dataTk == 'fiftyTk' ) {
				formOld.text('8 150₴');
				formValue.text('7 450₴');
				imgConstr.css({
					background: 'url(/img/constructor/50l-pro_big.jpg)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'top center'
				});
				mtextValue.text('Самогонный аппарат с баком на 50л');
				hiddenComment.val('Самогонный аппарат с баком на 50л');
			};
		}
	});

	$(colVal).on('click', function(e) {

		e.preventDefault();

		$(this).toggleClass('active');
		$('#litre').toggleClass('hide');
		bakVal.removeClass('active');
		formOld.hide();


		formValue.text('4 450₴');
		imgConstr.css({
			background: 'url(/img/constructor/pro_big.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'top center'
		});
		mtextValue.text('Колонна Aquagradus Стандарт');
		hiddenComment.val('Колонна Aquagradus Стандарт');

		if ( colVal.hasClass('active') ) {
			colVal.text('Аппарат в сборе');
			bakVal.text('Бак отдельно');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить колонну отдельно');
			modalBtn.text('Купить колонну отдельно');
		} else {
			colVal.text('Колонна отдельно');
			formOld.text('7 150₴');
			formValue.text('6 450₴');
			formOld.show();
			imgConstr.css({
				background: 'url(/img/constructor/20l-pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Самогонный аппарат с баком на 25л');
			hiddenComment.val('Самогонный аппарат с баком на 25л');
			$(litreVl).removeClass('active');
			$(litreVl[0]).addClass('active');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4 && i < 9) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
		};

		
	});

	$(bakVal).on('click', function(e) {

		e.preventDefault();

		$(this).toggleClass('active');
		$('#litre').removeClass('hide');
		colVal.removeClass('active');
		formOld.hide();


		formValue.text('2 700₴');
		imgConstr.css({
			background: 'url(/img/constructor/20l-nocolumn_big.jpg)',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'contain',
			backgroundPosition: 'top center'
		});
		mtextValue.text('Бак Aquagradus Стандарт на 25л');
		hiddenComment.val('Бак Aquagradus Стандарт на 25л');
		$(litreVl).removeClass('active');
		$(litreVl[0]).addClass('active');

		if ( bakVal.hasClass('active') ) {
			bakVal.text('Аппарат в сборе');
			colVal.text('Колонна отдельно');

			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				$(val).addClass('hide');
				if ( i > 3 ) {
					return false;
				}
			});
			buyBtn.text('Купить бак отдельно');
			modalBtn.text('Купить бак отдельно');
		} else {
			bakVal.text('Бак отдельно');
			formOld.text('7 150₴');
			formValue.text('6 450₴');
			formOld.show();
			imgConstr.css({
				background: 'url(/img/constructor/20l-pro_big.jpg)',
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				backgroundPosition: 'top center'
			});
			mtextValue.text('Самогонный аппарат с баком на 25л');
			hiddenComment.val('Самогонный аппарат с баком на 25л');
			$(litreVl).removeClass('active');
			$(litreVl[0]).addClass('active');
			$(arrCompl).removeClass('hide');
			$.each(arrCompl, function(i, val) {
				if ( i > 4 && i < 9) {
					$(val).addClass('hide');
				};
			});
			buyBtn.text('Купить аппарат');
			modalBtn.text('Купить аппарат');
		};

		
	});

});

// Parallax

$(function() {

	$(window).mousemove(function(e) {
		var change;
		var xpos=e.clientX;
		var ypos=e.clientY;
		var left= change*20;
		var  xpos=xpos*2;ypos=ypos*2;
		$('.layer-1').css('top',((80-(ypos/30))+"px"));
		$('.layer-1').css('left',(( 280-(xpos/50))+"px"));

	});

});

// Tab Recipe

$(function() {

	var winWidth = $(window).width();

	if ( winWidth < 767 ) {
		$('.tab-cont-r').not(':first').hide();
	} else {
		$('.tab-menu-r').hide();
	};


	$('.tab-link-r').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-cont-r').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-link-r').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.tab-recipe');
		var tabLink = $('.tab-link-r[data-tab='+dataTab+']');

		getWrapper.find('.tab-link-r').removeClass('active');
		tabLink.addClass('active');

		getWrapper.find('.tab-cont-r').hide();
		getWrapper.find('.tab-cont-r[data-tab='+dataTab+']').fadeIn('slow');
	});

	$(".swipe-r").swipe( {

		swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {

			// $(this).text("You swiped " + direction );
			var dataTab = $(this).data('tab');
			var dataTabNext = dataTab.split("");
			dataTabNext[3] = +dataTabNext[3] + 1;

			dataTabNext = dataTabNext.join("");


			var getWrapper = $(this).closest('.tab-recipe');
			var tabLink = $('.tab-link-r[data-tab='+dataTabNext+']');


			// console.log(dataTab);
			// console.log(dataTabNext);

			if ( dataTab !== 'tab2' ) {
				getWrapper.find('.tab-cont-r').hide();
				getWrapper.find('.tab-cont-r[data-tab='+dataTabNext+']').fadeIn('slow');

				getWrapper.find('.tab-link-r').removeClass('active');
				tabLink.addClass('active');
			}
			
    	},

    	swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {

			var dataTab = $(this).data('tab');
			var dataTabNext = dataTab.split("");
			dataTabNext[3] = +dataTabNext[3] - 1;
			dataTabNext = dataTabNext.join("");


			var getWrapper = $(this).closest('.tab-recipe');
			var tabLink = $('.tab-link-r[data-tab='+dataTabNext+']');
			
			if ( dataTab !== 'tab0' ) {

				getWrapper.find('.tab-cont-r').hide();
				getWrapper.find('.tab-cont-r[data-tab='+dataTabNext+']').fadeIn('slow');

				getWrapper.find('.tab-link-r').removeClass('active');
				tabLink.addClass('active');
    		}
    	}

  	});

  	//Set some options later
  	$(".swipe-r").swipe( {fingers:1} );

});

// Tab Modes

$(function() {

	$('.tab-cont').not(':first').hide();

	$('.tab-link').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-link-d').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-cont').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-link, .tab-link-d').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.mode');
		var tabLink = $('.tab-link[data-tab='+dataTab+'], .tab-link-d[data-tab='+dataTab+']');

		getWrapper.find('.tab-link, .tab-link-d').removeClass('active');
		tabLink.addClass('active');

		getWrapper.find('.tab-cont').hide();
		getWrapper.find('.tab-cont[data-tab='+dataTab+']').fadeIn('slow');
	});

	$(".swipe").swipe( {

		swipeLeft: function(event, direction, distance, duration, fingerCount, fingerData) {

			// $(this).text("You swiped " + direction );
			var dataTab = $(this).data('tab');
			var dataTabNext = dataTab.split("");
			dataTabNext[3] = +dataTabNext[3] + 1;

			dataTabNext = dataTabNext.join("");


			var getWrapper = $(this).closest('.mode');
			var tabLink = $('.tab-link[data-tab='+dataTabNext+'], .tab-link-d[data-tab='+dataTabNext+']');


			// console.log(dataTab);
			console.log(dataTabNext);

			if ( dataTab !== 'tab5' ) {
				getWrapper.find('.tab-cont').hide();
				getWrapper.find('.tab-cont[data-tab='+dataTabNext+']').fadeIn('slow');

				getWrapper.find('.tab-link, .tab-link-d').removeClass('active');
				tabLink.addClass('active');
			}
			
    	},

    	swipeRight: function(event, direction, distance, duration, fingerCount, fingerData) {

			var dataTab = $(this).data('tab');
			var dataTabNext = dataTab.split("");
			dataTabNext[3] = +dataTabNext[3] - 1;
			dataTabNext = dataTabNext.join("");


			var getWrapper = $(this).closest('.mode');
			var tabLink = $('.tab-link[data-tab='+dataTabNext+'], .tab-link-d[data-tab='+dataTabNext+']');
			
			if ( dataTab !== 'tab0' ) {

				getWrapper.find('.tab-cont').hide();
				getWrapper.find('.tab-cont[data-tab='+dataTabNext+']').fadeIn('slow');

				getWrapper.find('.tab-link, .tab-link-d').removeClass('active');
				tabLink.addClass('active');
    		}
    	}

  	});

  	//Set some options later
  	$(".swipe").swipe( {fingers:1} );

});

// Tab Additionally

$(function() {

	$('.tab-content').hide();

	$('.tablink').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tab-content').each(function(i) {
		$(this).attr('data-tab', 'tab'+i)
	});

	$('.tablink').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.additionally-goods');

		getWrapper.find('.tab').removeClass('active');
		$(this).closest('.tab').addClass('active');
		getWrapper.find('.tab-content').hide();
		getWrapper.find('.tab-content[data-tab='+dataTab+']').fadeIn('slow');

	});

	$('.tab-close').on('click', function(e) {
		
		e.preventDefault();

		var dataTab = $(this).data('tab');
		var getWrapper = $(this).closest('.additionally-goods');

		getWrapper.find('.tab-content').fadeOut('fast');
		getWrapper.find('.tab').removeClass('active');

	})

});

// Scroll to

$(function() { // fridayblack

	$('.more a, #menu a, .goto a, .card-block a, .banner a, .bannerm a').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top - 75}, 2000); // анимируем скроолинг к элементу scroll_el

	    if ( $(window).width() < 768 && $(this).hasClass('h-menu') ) {
	    	// console.log(this);
	    	$('.icon').toggleClass('active');
	    	var menu = $('#menu');
	    	menu.slideToggle();
	    };	    
	}
	    return false; // выключаем стандартное действие
	});

});

// Accardeon FAQ

$(function() {

	$('.accordeon .card>.collapse').not(':eq(1)').hide();
	$('.accordeon .card .x-link').not(':eq(1)').addClass('collapsed');

	$('.accordeon .card .x-link').on('click', function(e) {
		e.preventDefault();
		console.log('click');
		
		var findCollapse = $(this).closest('.card-header').next('.collapse');
		console.log(findCollapse);

		var findWrapper = $(this).closest('.accordeon');
		console.log(findWrapper);

		if ( findCollapse.is(':visible') ) {
			findCollapse.slideUp();
			findWrapper.find('.card .x-link').addClass('collapsed');
		} else {
			findWrapper.find('.card>.collapse').slideUp();
			findCollapse.slideDown();
			findWrapper.find('.card .x-link').addClass('collapsed');
			$(this).removeClass('collapsed');
		};

		
	});

});


// Scroll Header

$(function() {

	$(window).scroll(function() {

		var winWidth = $(window).width();

		if ( winWidth > 767 && winWidth < 1090 ) {
			if ( $(this).scrollTop() > 580 ) {
				$('.header-navbar .btnHead').show();
				$('.headChar').hide();
			} else {
				$('.header-navbar .btnHead').hide();
				$('.headChar').show();
			};
		} else if ( winWidth > 767 ) {
			if ( $(this).scrollTop() > 580 ) {
				$('.header-navbar .btnHead').show();
			} else {
				$('.header-navbar .btnHead').hide();
			};
		};

	});

});

// Drag img

$(function() {

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

// Burger bar

$(function() {
	
	$('.icon').on('click', function(e) {
		e.preventDefault();

		$('.icon').toggleClass('active');

		var menu = $('#menu');

		menu.slideToggle();
	});

});

//E-mail Ajax Send

$(function() { // fridayblack

	$("#headerCall, #bf-call, #headerForm, #modalBook, #formBuy, #aboutCall, #formAdd, #question, #char-form, #formBonus, #formVideo, #formTank").submit(function() { //Change
		var th = $(this);
		var submitButton = th.find("button[type='submit']");
		console.log(submitButton);
		submitButton.addClass('btn-disable').prop("disabled", true);


		$.ajax({
			type: "POST",
			url: "rest.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				// th.trigger("reset");
				location.href = "https://standart.aquagradus.com/sps/";
			}, 500);
		});
		return false;
	});


});

$(function() {
	$('[type="tel"]').mask('+389999999999');
});

$(function() {

	$('.red-more').on('click', function(e) {
		e.preventDefault();
		
		$('.hide-tip').toggle('slow');
		$(this).text('Свернуть');

		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active');
		} else {
			$(this).text('Больше информации ... ');
		};

	});

});

$(function() {

	function updater(d, h, m, s) {
  // День сброса - 27 сентября 2015 года (и далее каждые три дня)
  var baseTime = new Date(2018, 1, 6);
  // Период сброса — 3 дня
  var period = 3*24*60*60*1000;

  function update() {
  	var cur = new Date();
    // сколько осталось миллисекунд
    var diff = period - (cur - baseTime) % period;
  	// console.log(diff % 1000);
    // сколько миллисекунд до конца секунды
    var millis = diff % 1000;
    diff = Math.floor(diff/1000);
    // сколько секунд до конца минуты
    var sec = diff % 60;
    if(sec < 10) sec = "0"+sec;
    diff = Math.floor(diff/60);
    // сколько минут до конца часа
    var min = diff % 60;
    if(min < 10) min = "0"+min;
    diff = Math.floor(diff/60);
    // сколько часов до конца дня
    var hours = diff % 24;
    if(hours < 10) hours = "0"+hours;
    var days = Math.floor(diff / 24);
    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = min;
    s.innerHTML = sec;

    // console.log(days);

    if ( days < '1' ) {
    	// console.log(days);
    	$('.timer--red').css('color', '#EE4034');
    };

    // следующий раз вызываем себя, когда закончится текущая секунда
    setTimeout(update, millis);
}
setTimeout(update, 0);
}

updater(document.getElementById("days1"),
	document.getElementById("hours1"),
	document.getElementById("minutes1"),
	document.getElementById("seconds1"));

updater(document.getElementById("days2"),
	document.getElementById("hours2"),
	document.getElementById("minutes2"),
	document.getElementById("seconds2"));

updater(document.getElementById("days3"),
	document.getElementById("hours3"),
	document.getElementById("minutes3"),
	document.getElementById("seconds3"));

});


$(function() {
	
	var goTo = $('#goto'),
	sticky = goTo.offset().top,
	timeHeader = $('.time-wrap');

	$(window).scroll(function() {

		var topPos = $(this).scrollTop();

		if ( $(window).width() > 767 ) {
			if ( topPos >= sticky ) {
				timeHeader.removeClass('animateHide');

			} else {
				timeHeader.addClass('animateHide');

			}
		} else {
			if ( topPos >= sticky ) {
				timeHeader.addClass('active');

			} else {
				timeHeader.removeClass('animateHide');
				timeHeader.removeClass('active');
				timeHeader.addClass('animateHideMob');
				$('#time-text').text('Акция: ');
			}
		}



	});

});

$(function() {
	
	setInterval(function() {

		$('.header-bonus').toggleClass('blink');

	}, 1000);

});


var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {

	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
		if (n < 1) {slideIndex = slides.length}
			for (i = 0; i < slides.length; i++) {
				slides[i].style.display = "none";
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" active", "");
			}
			slides[slideIndex-1].style.display = "block";
			dots[slideIndex-1].className += " active";
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}