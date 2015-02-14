Important! There are two more steps required to make the map work properly.

Uncomment the last block of code in helper.js. The code you need starts with window.addEventListener('load', initializeMap); and goes until the end of the file.
Uncomment the <script> tag for Google Maps API in the <head> of index.html.
The reason these instructions weren't included in the video is that we didn't realize until late that these lines produce errors if you don't .append() a map to the page.

Want to learn about HTML and CSS? Try out Intro to HTML and CSS.

Want to check out your classmates' resumes? Check them out on GitHub.

// ADD OVERLAY TO MAP MARKERS

Can you extend the resume's Google Map?

Within helper.js, you'll find the logic that controls the Google Map starting at line 70.

Essentially, the function initializeMap() is called when the page loads. From there, the script iterates through all of the objects in the resume, collects the location strings and sends off those locations to the Google Place Search service. From there, the place search service results are turned into location pins on the map itself!

Your Challenge

Your goal is to add an overlay with the name of each city that will appear when a user clicks on your map.

Start by checking out the createMapMarker() function in helper.js, which includes a few lines that add an event listener to the map that fires off an event when each marker gets clicked.

google.maps.event.addListener(marker, 'click', function() {
    // your code goes here
});
The code inside the event listener will run every time a user clicks on your map.

createMapMarker() also creates an infoWindow object that will determines the properties of the overlay.

Read through the Google Maps API for info windows and take a look at this example. Can you figure out the right function to call within the event listener to ensure that the infoWindow object opens when a user clicks on a location? Click "Continue to quiz" when you're ready to give it a shot!

Let's start by reading through the infoWindow constructor in the Google Maps API.

It says that "After constructing an InfoWindow, you must call open to display it on the map."

In other words, the infoWindow has an open method encapsulated in it that we must call to open each overlay.

This is a good place to start. Let's take a look at the example to see how they open each infoWindow.

Looking down through the example, it looks like they're opening the window here:

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map, marker);
});
They're calling the open() method on the infowindow object (in helper.js, we call it infoWindow) and pass in the map object and the marker object.

But how did they know to pass in map and marker? The open(map, anchor) method described in the API explains that it needs a map first and then an anchor point. The anchor point is simply the position to open the map, which we obviously want to be the same as the map marker.

So, in the end we simply add the line

infoWindow.open(map, marker)

to the event listener for each map marker and we've got overlays!

Next step, try formatting the content of the infoWindow, which is simply a string that contains the overlay's HTML. Right now it's set to name, which is just the name of the city. Try learning some HTML and CSS to make the overlay really stand out!


// var charEscape = function(_html) {
//     var newHTML = _html;

//     newHTML = _html.replace(/</g, "&lt;");
//     newHTML = newHTML.replace(/>/g, "&gt;");

//     return newHTML;
// };

// To do so, we can use string.replace(old, new). Note, however, that if you pass in a string as old, string.replace(old, new) will only replace the first instance of the old string.

// You must pass in a regular expression as old to replace every instance of old in the string.

// In the example above, we passed /</g and />/g as old into string.replace(old, new), which are regular expressions that grab all instances of < and >.


/* 
	1) Create WORK and PROJECT objects.
	3) resumeBuilder should only contain four objects.
*/

/* 
Instructor Notes

work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.

projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.

bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.

education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
*/


/*
If given a string of a two word name formatted with any mix of capitalization, can you manipulate the string to ensure the first name has a capital first letter and the last name is totally capitalized? 

Assume there's a space between the names. For instance, turning a string like "cAmEROn PittMAN" into "Cameron PITTMAN". Your answer should be a single string saved to the variable called finalName.
Take a look at MDN's documentation on string methods and click "Continue" when you're ready to give it a shot.

	var name = "AlbERt EINstEiN";

	// MY EXAMPLE:
	function nameFormatter(name) {

		var strArray = name.split(" ");
		
		// capitalize first character in first name, and concatenates with remainder lower cased characters.
		var firstName = strArray[0].charAt(0).toUpperCase() + strArray[0].slice(1).toLowerCase();
		// converts all to upper case.
		var lastName = strArray[1].toUpperCase();
		var finalName = firstName + " " + lastName;
		
		return finalName;
	};
	
	
	// UDACITY EXAMPLE:
	function nameChanger(oldName) {
		var finalName = oldName;
		var names = oldName.split(" ");
		names[1] = names[1].toUpperCase();
		names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
		finalName = names.join(" ");
		return finalName;
	}	
*/