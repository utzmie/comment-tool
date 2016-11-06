!function($) {

	function setButtons() {
		var $container = $('#watch_zapping_box');
		var $button_container = $('<div id="kyouore-button-container">');
			$button_container.prependTo($container);

		$.get(chrome.extension.getURL('./button-tab.html'), function(data) {
			$($.parseHTML(data)).appendTo($button_container);

			// tab ui
			$('.kyouore-tab-panel').addClass('is-hidden');
			$('.kyouore-tab-item').addClass('is-hidden');
			$('.kyouore-tab-panel:nth-child(1)').removeClass('is-hidden').addClass('is-active');
			$('.kyouore-tab-item:nth-child(1)').removeClass('is-hidden').addClass('is-active');

			$('.kyouore-tab-item > button').on('click', function() {
				var link = $(this).attr('data-link');
				$('.kyouore-tab-panel').addClass('is-hidden').removeClass('is-active');
				$('.kyouore-tab-item').addClass('is-hidden').removeClass('is-active');
				$("#"+link).addClass('is-active').removeClass('is-hidden');
				$(this).parent('li').addClass('is-active').removeClass('is-hidden');
				console.log ($("#"+link));
			});

			var $copyButton = $('.kyouore-tab-panel button');

			// delete
			$text_input = $('#kyouore-copytext');
			$text_input.val('');
			$text_input.select();
			document.execCommand("delete", false, '');

			// click and copy
			$copyButton.on('click', function() {
				console.log($(this).text());
				console.log( $text_input.val($(this).text()) );
				$text_input.select();
				document.execCommand("copy", false, $(this).text());
			});
		});
	}

	$(window).on('load', function() {
		setButtons();
	});


}(jQuery);