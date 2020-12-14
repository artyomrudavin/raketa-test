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

// Modal Control - Additionally

$(function() {

	var modal = $('#additionally-modal.modal-mask'),
	addPrice = $('#additionally-modal #modal-value-add'),
	addTextm = $('#additionally-modal #modal-text-add')
	hiddenComAdd = $('#additionally-modal [name="DATA[COMMENTS]"]');
		// console.log(hiddenComAdd);

		$('#carga, #komplOhl, #areom, #rashiga, #popugai, #dioptr, #ugol, #regMosh, #ten').on('click', function(e) {
			e.preventDefault();

			console.log('click');
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

// Phone mask

$(function() {
	$('[type="tel"]').mask('+389999999999');
});

// E-mail Ajax Send

$(function() {

	$("#formAdd").submit(function() { //Change
		var th = $(this);

		$.ajax({
			type: "POST",
			url: "../rest.php", //Change
			data: th.serialize()
		}).done(function() {
			// alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
			location.href = "https://standart.aquagradus.com/sps-youtube/";
		});
		return false;
	});


});