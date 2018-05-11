$(document).ready(function(){

	$('.modal form .phone').inputmask({
		"mask": "+38 (099) 999-99-99",
		"onincomplete": function(){ alert('Ведите номер полносью'); },
	});
	
	$('a.button').click(function(event) {
		event.preventDefault();
		$('.overlay').show('fast');
		$('.modal').show('fast');
	});
	$('.overlay, .close').click(function(event) {
		event.preventDefault();
		$('.overlay').hide('fast');
		$('.modal').hide('fast');
	});

	var options = {
		url: "js/city.json",
		getValue: "name",
		list: {	
			match: {
				enabled: true
			}
		}
	};

	$(".city").easyAutocomplete(options);

	$(document).on('submit','form',function(e){
		e.preventDefault();
		form = $(this);
		$.ajax({
			url: 'ajax.php',
			data: form.serialize(),
			type: "post",
			dataType: "json",
			success: function (resp) {
				console.log(resp);
				form[0].reset();
				$('.modal h2, .modal form').hide('fast');
				$('.modal .sucsses').show('fast');
				setTimeout(function () {
					$('.modal').hide('fast');
					$('.overlay').hide('fast');
					$('.modal .sucsses').hide('fast');
					$('.modal h2, .modal form').show('fast');
				},3000);
			}
		});
	});

});