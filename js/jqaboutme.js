$(document).ready(function() {
	$('#myText').load('https://yamal-coding.github.io/files/aboutmecontent.html', function(){
		$("#githubButton").hover(function(){
			$("#imagenGit").css("top", $("#githubButton").position().top + 50)
						.css("left", $("#githubButton").position().left)
						.show("500");
		}, function(){
			$("#imagenGit").hide("500");
		});
		$("#artButton").hover(function(){
			$("#imagenArt").css("top", $("#artButton").position().top + 50)
						.css("left", $("#artButton").position().left)
						.show("500");
		}, function(){
			$("#imagenArt").hide("500");
		});
		$("#linkedinButton").hover(function(){
			$("#imagenLink").css("top", $("#linkedinButton").position().top + 50)
						.css("left", $("#linkedinButton").position().left)
						.show("500");
		}, function(){
			$("#imagenLink").hide("500");
		});
		$("#projectsButton").hover(function(){
			$("#imagenProjects").css("top", $("#projectsButton").position().top + 50)
						.css("left", $("#projectsButton").position().left)
						.show("500");
		}, function(){
			$("#imagenProjects").hide("500");
		});
	});
});
