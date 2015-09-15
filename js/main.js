$(document).ready(function() {

	$("#enterButton").click(function() {

		var firstname = $("#firstName").val();
		var lastname = $("#lastName").val();

		$("#message").text("Hello " + firstname + " " + lastname + ". Welcome to the site!");


	});

	//****************************


	$("#tweetButton").click(function() {
		var tweet = $("#tweet").val();

		console.log(tweet.length)

		if (tweet.length > 140) {
			alert("Tweet too long. " + tweet.length + " characters.");
		} else {
			alert("Tweeted!" + tweet.length + " characters.");
		}


	});

		//****************************


	$(".appender").click(function(e) {
		var target = $(e.currentTarget),
			appendText = target.text();

		console.log(target)

		$('#result').append("<p>" + appendText + " BOOM! APPENDED.</p>")
	})

})