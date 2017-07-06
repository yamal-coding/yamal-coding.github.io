var displayed = false;

$(document).ready(function() {
	$('#divMenu').load('http://localhost:8000/files/menucontent.html', function() {
		$('#menuButton').click(function(){
			if (!displayed) {
				displayed = true;
				$("#submenu").show(500);
			}
			
			$("#closeMenuButton").click(function(){
				if (displayed) {
					$("#submenu").hide(500);
					displayed = false;
				}
			});

			$("#githubButton").hover(function(){
				$("#imagenGit").attr("src", "../img/git.png")
							.css("top", $("#githubButton").position().top)
							.css("left", $("#githubButton").position().left + 160)
							.show("500");
			}, function(){
				$("#imagenGit").hide("500");
			});
			$("#artButton").hover(function(){
				$("#imagenArt").attr("src", "../img/logo_yo.png")
							.css("top", $("#artButton").position().top)
							.css("left", $("#artButton").position().left + 160)
							.show("500");
			}, function(){
				$("#imagenArt").hide("500");
			});
			$("#linkedinButton").hover(function(){
				$("#imagenLink").attr("src", "../img/linkedin.png")
							.css("top", $("#linkedinButton").position().top)
							.css("left", $("#linkedinButton").position().left + 160)
							.show("500");
			}, function(){
				$("#imagenLink").hide("500");
			});
			$("#aboutmeButton").hover(function(){
				$("#imagenAbout").attr("src", "../img/aboutme.png")
							.css("top", $("#aboutmeButton").position().top)
							.css("left", $("#aboutmeButton").position().left + 160)
							.show("500");
			}, function(){
				$("#imagenAbout").hide("500");
			});
		});//.draggable();
	});
});