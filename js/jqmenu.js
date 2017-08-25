var local = false;

$(document).ready(function() {
	$("#cajaMenu").load(((local) ? 'http://localhost:8000' : 'https://yamal-coding.github.io') + '/files/menucontent.html', function(){
		$('.boton').hover(function(){
			$('#' + $(this).attr('imagen')).css("top", $(this).position().top + 50)
						.css("left", $(this).position().left)
						.show("500");
		}, function(){
			$('#' + $(this).attr('imagen')).hide("500");
		});
	});
});
