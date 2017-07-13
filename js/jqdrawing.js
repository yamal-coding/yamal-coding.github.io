var idClickado;

$(document).ready(function(){
	$.getJSON('/files/drawings.json', function(data){
		$.each(data, function(key, value){
			$.each(value, function(key2, value2){
				if (key2 == "url") {
					//ref = '<span class="drawing" id="' + key + '"><img src=' + value2 + '></span>';
					ref = '<span class="drawing gallery-item" id="' + key + '" href="' + value2 + '"><img src=' + value2 + '></span>';
					$("#cajaDibujos").append(ref);
				}
			});
		});
		
		$('.gallery-item').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true
			}
		});
	});

	/*$('#cajaDibujos').on('click', '.drawing', function(){
		if (idClickado == $(this).attr('id'))
			$('#'+ $(this).attr('id')).find('img').css("height", "20%").css("width", "20%");
		else {
			$('#'+ idClickado).find('img').css("height", "20%").css("width", "20%");
			$('#'+ $(this).attr('id')).find('img').css("height", "50%").css("width", "50%");
			idClickado = $(this).attr('id');
		}
	});*/
});