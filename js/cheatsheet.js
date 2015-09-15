$(document).ready(
	//Document ready ensures that no code is run before the web page has loaded in the browser.
	//All script should be wrapped in this code or it may not run properly.

	// The dollar sign - $ - is used to initiate calling something through jQuery with the DOM,
	// like an HTML element, class, or id.
	// Syntax for selecting an element is the same as CSS: "element" "#elementId" ".class"

	//Mouse Events:

	// Click Events run code when a designated element is clicked. The code can call function, 
	// set variables, etc.

	$(#elementId).click(function() {
		alert("I'm clicked!")
	});

	// Hover / mouseover triggers code when a mouse rolls over an element

	$(#elementId).mouseover(function() {
		alert("You hovered!")
	});

	$(#elementId).hover(function() {
		alert("You hovered!")
	});

	// Changing CSS:

	$(.elementClass).css(
		"background-color" : "red"
		);

	// Hide & Show: Identify an object and apply fadeIn or fadeOut as a function

	$(.elementClass).hide();
	$(.elemtnClass).show();

	// Toggle allows an object to toggle the visibilitry of another object. The code below would
	// toggle all elements with the class "elementClass"

	$(.elementClass).toggle();


	// Fading: Identify an object and apply fadeIn or fadeOut as a function.
	// These functions take a number of seconds as a parameter to set the duration of a fade.

	$(.elementClass).fadeOut(5000);
	$(.elemtnClass).fadeIn(5000);

	//Sliding: Identify an object and apply slideDown or slideUp as a function

	$(.elementClass).slideUp(5000);
	$(.elemtnClass).slideDown(5000);

	// Animation: animate most CSS properties that are numeric

	$(".my-element").animate( { opacity: 0.25, width: "70%" } , 2000 );

	//Changing Content

	//HTML Function adds HTML to the document

	$("#elementId").html("<p>A Paragraph</p>");

	//Text function adds text into an element or replaces existing text.

	$("#elementId").text("This text will replace the text in the element with the designmated ID");

	// Append adds content onto an existing element without overwriting

	$("#elementId").append("This text will be added into the element with the designmated ID");

);