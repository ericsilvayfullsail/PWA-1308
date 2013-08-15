/*
	Regular Expression / Math Methods / Date Methods
	PWA1 Goal 5
*/


(function(){  // application scope (self-executing function)

console.log('------------ Goal 4 RECAP! -------------------');

/*
	Goal 4 RECAP!
	==============================================================
	
	1. Objects
	2. Intro to DOM
	3. Events & Callbacks

	http://www.quirksmode.org/dom/w3c_css.html

	Reminder:  	Goal 6 - Midterm Practical
				        Goal 11 - Final Practical
*/


/*	==================================================================
	Objects
	------------------------------------------------------------------
		
	- objects are collections of keys and values for storing data {KEY : Value} pairings, also 
		known as associative pairing
 
	- arrays and objects are both used to store multiple values 
		arrays vs objects:  
 			1.  arrays store by numerical index
 			2.  objects store by a key index
	
	- keys in objects are names (similar to variables), used to index a value inside the object

	- similar to making an array, we declare the object’s properties inside the literal, separating 
		by comma...
*/

console.log('------ Objects ----------');

// very basic objects
//{KEY : Value} pairings,
person = {'name':'bond', 'age':35, 'secretAgent':true};

// STUDENT - how would you write the above with with the KEY not being a
//      string?


// nested object
person = {birthday:{month:02, day:12}, name:'bond'};   //setter

console.log(person['birthday']['month']);   //index syntax - returns ’02’ (getter)

//STUDENT - how would you console.log the birthday month in dot notation?


// Object within an object, Arrays, Function
var thatGuy = {
	name: 'JamesBond',
	course: 'PWA1',
	address: {
		num: 3300,
		street: 'University',
		city: 'Orlando',
		cornerOf: ['University', 'Semoran']
	},
	showMyAddress : function(){
		var x = this.address.street + ', ' + this.address.city;
		return x;
	}
};

//STUDENT - How would you invoke the "showMyAddress" function using dot
//      syntax?


//STUDENT - console.log the street address and city using dot notation.


// below is an object that contains an array of objects
var obj1 = {
	schoolName:'Full Sail',
	address:'123 University Blvd',
	studentCount:16000,
    //student is an array of objects
    students:[
			{name:'Jane Doe', GPA:2.6, classes:['PWA1','ARD']},
			{name:'Albert Einstein', GPA:4.0},
			{name:'James Bond', GPA:3.9}
		]
	};

//STUDENT - how would you get the length of the students array?


/*
	==============================================================
	THE DOM:
	--------------------------------------------------------------	
	DOM exposes HTML elements as javascript objects
	window			// the window object represents an open window in a browser. - Used by Google Analytics
	window.location // the location object contains information about the current URL
	document		// global DOM object
	document.body	// <body> tag element (html element root)

	Note: Always use <!doctype html>
*/

console.log('------------ Document Object Model (DOM) -------------------');


	
/*
	==============================================================
	DOM Search Methods:
	--------------------------------------------------------------
	document.getElementById(string);			// element (first match)
	document.getElementsByTagName(string);		// array of elements
	
	document.querySelectorAll(string);			// array of elements
	document.querySelector(string);				// element (first match or NULL)

	 all the "string" above uses CSS syntax

	// Use querySelector or querySelectorAll
*/



//STUDENT - using the console.log above, how would you include ALL the 'li'
//      for the id #nav?



/*
	==================================================================
	TRAVERSAL
	------------------------------------------------------------------
	"Traversing" means finding other html elements from an already selected element
	We can use XML nodes for traversing
		
	Traversal works by parent/child relationships:
        firstChild
        lastChild
        childNodes			// Returns an Array
        parentNode
        nextSibling
        previousSibling

	Remember 'Line Breaks' ( \n ) are elements.
*/



/*
	==================================================================
	Manipulating Attributes
	------------------------------------------------------------------
	element.getAttribute(attr) - "data-..."
	element.setAttribute(attr, value)
		
	Returns a string. May need to be converted to a number.

	attr: src, id, href, class, alt, title ...

	Display manipulation in browser.
	
	var x = document.querySelector('#nav').childNodes[1].firstChild;
	x.setAttribute('href','http://www.google.com');
	x.setAttribute('title','Some cool stuff!');
*/

console.log('------------ DOM - Manipulating Attributes -------------------');


//STUDENT - how would I set the attribute? change the href to google.com?


/*
	==================================================================
	Manipulating HTML
	------------------------------------------------------------------
	HTML elements also have a property called "innerHTML"
	.innerHTML is both a getter and a setter property (using strings)

*/

console.log('------------ DOM - Manipulating HTML w/ .innerHTML -------------------');





/*
	==================================================================
	Manipulating CSS
	------------------------------------------------------------------
	Every html DOM object has a "style" property that is both getter and setter for CSS properties.
	You can access any CSS property that the browser allows.
	Accessed by camelCase, examples:
		
	background-color becomes backgroundColor

	navLinks[i].style.backgroundColor = '#ff0000';
					fontSize = '200%';
					padding = '30px 5px 5px 5px';
					marginBottom = '20px';
					border = '3px dotted black';	
*/

console.log('------------ DOM - Manipulating CSS -------------------');

var navLinks = document.querySelectorAll('#nav a');




/*
	==================================================================
	DOM Events 
	------------------------------------------------------------------
	Examples of HTML events:

	    When a user clicks the mouse
	    When a web page has loaded
	    When an image has been loaded
	    When the mouse moves over an element
	    When an input field is changed
	    When an HTML form is submitted
	    When a user strokes a key

	An event listener is all lowercase with the prefix "on"

	The function is the event handler.  Can be anonymous or named.
	The function's only argument is the EVENT OBJECT (e).
	The function's CONTEXT (this) is the html element.

*/

console.log('------------ DOM Events -------------------');

	// 2 different ways to call a click event

	// #1
	// new way to write a click event (named)
	// need to comment out ALL code from above - to not remove links.

    //select the first anchor link
	var navLinks = document.querySelector('#nav a');



	// #2 (anonymous)
	


//	END Goal 4 RECAP --------------------------------
	

/*
	==================================================================
	Regular Expressions
	------------------------------------------------------------------
	// Review the slides for Regular Expressions which is the same info as the below

	Example Pattern:
	Date: 	/^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[13-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
	Email: 	/(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})/
	Phone: ^[2-9]\d{2}-\d{3}-\d{4}$
		407-555-5555 

	// special RegEx rules
	. (dot)			this is a wildcard character - it will match anything except for line breaks
	* (asterisk)	when an asterisk precedes a character, it must match it 0 or more times
	+ (plus)		when a plus precedes a character, it must match it 1 or more times
	? (question)	this makes the preceding character optional (0 or 1 matches only)
	^ (caret)		this matches the following character at the start position of a string
	$ (dollar)		this matches the preceding character at the end position of the string
	| (pipe)		this will match the pattern either on the left or the right of the pipe


	// RegEx examples
	/^javascript/  				matches “javascript rules”, but not “i love javascript”
	/javascript$/  				matches “i love javascript” , but not “javascript rules”
	/^javascript$/  			matches only “javascript” and nothing else.
	/yea+h/  					matches “yeah”, “yeaaaah”.. but not “yeh” it would need /yea*h/
	/yea?h/   					matches “yeah” and “yeh”.. but not “yeaaaah”
	/javascript|JavaScript/   	matches “javascript” or “JavaScript”


	// special RegEx rules
	(..)	 	- round brackets define a group of characters that must occur together
				- after the closing bracket, you can then apply modifiers such as * + or ?
	[..]	 	square brackets define a character class - a character class matches any one 
					character inside the brackets - most common to use are:
	[aqz]		match one occurrence of “a”, “q”, or “z”, the same as (a|q|z)
	[a-z]		would match any lower case letter
	[A-Z]		would match any upper case letter
	[a-zA-Z]	would match any letter
	[^..]		any one character not between the brackets - [^a-zA-Z]  would match any non-letter
 */

console.log('------------ Regular Expressions -------------------');

/******************************************************************************
STUDENT ACTIVITY

	1.  Write a RegEx for a basic name (containing only letters)

		Answer: 

	2.  What are the possible answers for this: /[Jj]ava[Ss]cript/

		Answer: 

	3. 	What are the possible answers for this: /^(Java)?Script$/

		Answer: 

	4. 	Describe the possible answer for this: /^[a-zA-Z\^\-\.]+$/

		Answer: 

	5.	Combining character sets can create sequences of matches.
		
		Describe the possible answers for this: /^[a-zA-Z]+[0-9]$/ 	

		Answer: 

----------------------------------------------------------------------------- */

/*
	most often, validation sets consist of multiple classes like the above

	//methods
	exec()		RegExp.exec(string): apply RegExp to the given string, and returns the matched information or null
	test()		    RegExp.test(string): tests for a match in its string parameter - returns a boolean
	match()		string.match(RegExp): match given string with the RegEx
	search()	    string.search.(RegExp): matches RegExp with string and returns the index of the beginning of
					the match if found, -1 if not
	replace()	string.replace.(RegExp): matches the given string, and returns the edited string
	split()		string.split.(RegExp): cuts a string into an array, making cuts at matches
*/






/* 
	// RegExp metaCharacters
	\s	matches any whitespace character, similar to  [ ]
	\S	matches any non-whitespace, similar to  [^ ]
	\d	matches any digit, similar to  [0-9]
	\D	matches any non-digit, similar to  [^0-9]
	\w	matches any “word” letter, similar to  [a-zA-Z0-9_]
	\W	match any non-”word” letter, similar to  [^a-zA-Z0-9_]


	// RegExp variations
	{n, m}	matches at least n, but no more than m
	{n,  }	matches at least n
	{n}		matches exactly n

	/^\d{5}$/ - could match a 5 digit zipcode (and only 5 digits)
 	/^[a-zA-Z]{2,3}$/ - would match 2 to 3 letters only 
*/

// phone number string that matches the RegEx




/******************************************************************************
STUDENT ACTIVITY

	Write a RegEx for a phone number to match the following formats:
	1.  Format: (123) 456-7890 | 123-456-7890

		Answer: 

	2.  Format: (573)8841878 | 573-884-1234 | 573 234 1256

		Answer: 
	
----------------------------------------------------------------------------- */


/*	==================================================================
	Math Methods
	------------------------------------------------------------------
		
	The Math object allows you to perform mathematical tasks.

	popular math methods: floor( ), max( ), min( ), random( ), round( )
*/

    console.log('------------ Math Methods -------------------');




/*	==================================================================
	Date Methods
	------------------------------------------------------------------
		
	The date object is used to work with dates and times
	Date objects can be created with a “new Date( )” 

	popular date methods: date( ), getFullYear( ), setFullYear( ), getTime( ), getDay( )

*/

    console.log('------------ Date Methods -------------------');




})(); // end wrapper