// PERSONEL INFO
var bio = {
	"name": "Joe Blogs",
	"role": "Software Engineer",
	"contact": "joe@blogs.com",
	"picture": "images/fry.jpg",
	"skills": ["csharp", "python", "ruby", "html", "css", "javascript"],
	"contact":
	{
		"email": "joe.blogs@awesome.com",
		"twitter": "@joeblogs",
		"github": "joeblogs",
		"location": "Perth, Western Australia"
	},
	"message": "Welcome to my awesome JavaScript resume. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a cursus elit, a aliquam lorem. Quisque non scelerisque risus."
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedBioPic = HTMLbioPic.replace('%data%', bio.picture);

	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#header').prepend(formattedBioPic);

	// CONTACT INFO
	var formattedEmail = HTMLemail.replace('%data%', bio.contact.email);
	var formattedTwitter = HTMLtwitter.replace('%data%', bio.contact.twitter);
	var formattedGithub = HTMLgithub.replace('%data%', bio.contact.github);
	var formattedLocation = HTMLlocation.replace('%data%', bio.contact.location);

	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedTwitter);
	$('#topContacts').append(formattedGithub);
	$('#topContacts').append(formattedLocation);

	// SKILLS
	if(bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for(var i=0; i<bio.skills.length; i++) {
			var formattedSkills = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkills);
		}
	}
};

bio.display(); // FUNCTION CALL TO DISPLAY BIO DATA


// EDUCATION
var education = {
	"schools": 
	[ 
		{
			"name": "Murdoch University",
			"degree": "BSc Information Systems",
			"major": "Application Development"
		}	
	],
	"courses": 
	[
		{
			"school": "Udacity",
			"title": "Intro to HTML and CSS"
		},
		{
			"school": "Udacity",
			"title": "JavaScript Basics"
		}
	]
}

education.display = function() {
	var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[0].name);
	var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[0].degree);
	var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[0].major);

	$('#education').append(HTMLschoolStart);
	$('.education-entry:last').append(formattedSchoolName);
	$('.education-entry:last').append(formattedSchoolDegree);
	$('.education-entry:last').append(formattedSchoolMajor);

	// ONLINE COURSES
	if(education.courses.length > 0) {
		$('.education-entry:last').append(HTMLonlineClasses);

		for(var i=0; i<education.courses.length; i++) {
			var formattedCourseSchool = HTMLonlineSchool.replace('%data%', education.courses[i].school);
			var formattedCourseTitle = HTMLonlineTitle.replace('%data%', education.courses[i].title);

			$('.education-entry:last').append(formattedCourseTitle);
			$('.education-entry:last').append(formattedCourseSchool);
		}
	};
};

education.display(); // FUNCTION CALL TO DISPLAY EDUCATION DATA

// EMPLOYMENT
var employment = {
	"jobs": 
	[
		{
			"name": "Zengineered",
			"role": "Software Engineer",
			"start": "2013",
			"finish": "Present",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet felis ac massa fringilla, sit amet posuere metus egestas. Vivamus nec turpis id lectus consequat vestibulum a eu purus. Aenean vitae est a libero consectetur fringilla sit amet id enim. Vivamus porttitor tincidunt risus."
		},
		{
			"name": "Mermaid Marine",
			"role": "Systems Developer",
			"start": "2011",
			"finish": "2013",
			"description": "Aliquam erat volutpat. Mauris bibendum, arcu sed viverra sodales, dui diam fermentum justo, vitae feugiat sapien sem vel turpis. In venenatis vestibulum nisl nec tincidunt. Ut placerat metus eu vehicula pulvinar. Cras sollicitudin metus sit amet ullamcorper aliquam. In sit amet condimentum elit."		
		}
	]
}

employment.display = function() {
	for(jobIndex in employment.jobs) {
		$('#workExperience').append(HTMLworkStart);

		// Use bracket notation to access object properties.
		var formattedWorkName = HTMLworkEmployer.replace('%data%', employment.jobs[jobIndex]["name"]);
		var formattedWorkTitle = HTMLworkTitle.replace('%data%', employment.jobs[jobIndex]["role"]);
		var formattedWorkDates = HTMLworkDates.replace('%data%', employment.jobs[jobIndex]["start"] + " - " + employment.jobs[jobIndex]["finish"]);
		var formattedWorkDescription = HTMLworkDescription.replace('%data%', employment.jobs[jobIndex]["description"]);

		$('.work-entry:last').append(formattedWorkName + " " + formattedWorkTitle);
		$('.work-entry:last').append(formattedWorkDates);
		$('.work-entry:last').append(formattedWorkDescription);
	}
};

employment.display(); // FUNCTION CALL TO DISPLAY EMPLOYMENT DATA

// PROJECTS
var project = {
	"projects":
	[
		{
			"title": "Portfolio Site",
			"description": "My sample generic portfolio page",
			"image": "images/placeholder.gif"
		},
		{
			"title": "JavaScript Resume",
			"description": "My dynamic Resume using JavaScript.",
			"image": "images/placeholder.gif"		
		},
		{
			"title": "Readzone",
			"description": "My sample book site displaying my favourite books.",
			"image": "images/placeholder.gif"	
		},
		{
			"title": "Fast Feed",
			"description": "My sample site for a local restaurant.",
			"image": "images/placeholder.gif"			
		}
	]
}

project.display = function() {
	for(prjIndex in project.projects) {

		$('#projects').append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.projects[prjIndex].title);
		var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.projects[prjIndex].description);
		var formattedProjectImage = HTMLprojectImage.replace('%data%', project.projects[prjIndex].image);
		
		$('.project-entry:last').append(formattedProjectTitle);
		$('.project-entry:last').append(formattedProjectDescription);
		$('.project-entry:last').append(formattedProjectImage);				
	}
};

project.display(); // FUNCTION CALL TO DISPLAY PROJECT DATA

// GOOGLE MAP - LOCATIONS
$('#mapDiv').append(googleMap);


$(document).click(function(loc) {
	console.log(loc.PageX + " " + loc.PageY)
});