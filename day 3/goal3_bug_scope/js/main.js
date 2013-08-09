/*
	PWA1 Goal 3
	JavaScript Debugging & Scope
*/


(function(){

/*
	===================================================================
	Goal 2 Recap
*/

console.log('------ Recap from the previous lecture ----------');

/*******************************************
 STUDENT ACTIVITY 1:

 We are starting the review with an assessment to test your comprehension of
 some of the course materials from Goal 2

     1.  an array of students is provided for you
     2.  console.log the number of items in the array
     3.  create a for loop
         - console.log the index number
         - console.log the student name in the array that pertains to the index
             number of the loop (i.e. if the loop is on index 1 then the student's
             name of 'Bob' should be console.logged
 ********************************************/

// Array - For Loop
    var students1 = ['Bob','Christine','Sally','Jim'];




/*
	===============================================
	ERROR TYPES: syntax, runtime, logic
*/
/*
	===============================================
	Debugging Techniques
		
	Syntax Errors:
		- Occur during parsing (when the script is being read by the browser)
		- Usually the result of missing a comma, or closing characters (quotes, brackets, parens)
		- One error will display at a time in your browsers console.log
        - Multiple syntax errors can occur but will display one at a time
	
	Runtime Errors:
		- Occur during runtime (when the script is in execution)
		- Usually caused by misspelled variable names, undefined variables, or bad function declarations
		- Only 1 runtime error will occur one at a time, fix & refresh
		
	Logic Errors:
		- Does not throw an actual error
		- This is what we call code that works but doesn't work correctly, there's a 'BUG'
		- The issue with these errors occur between your keyboard and the chair you are sitting in, Ha...
		- Infinite loops fall in this category	

    -----------------------------------------------

    - use a good text editor or IDE
    - use multiple browsers (they display different error messages)
    - keep the browsers console open at all times
    - use console.log EXTENSIVELY!!!!!!!
    - write JavaScript in external files
    - take a break!

*/

console.log('------ Debugging ----------');

/***********************
     For each of the examples below you will have to un-comment the code so the
     error in the code displays in the console.log.  You will want to determine
     the answer to what is incorrect about the code.

     Purpose is to display the error messages so you can see what the error messages
     display.  You may want to see the error messages in Chrome and Firefox.
 ***********************/

 /*
	//Example1
	var name = james, course = 'PWA1, month = 3;
	console.log ("name: ", name + " / course: ", coures + " / month: ", month)


    //Example2:
	//string w/ escape charaters and mixed single/double quotes
	var phrase = 'he's in ' + ' "PWA1' ";
	console.log("phase 4: ", phr@se);


    //Example3:
	//nested conditional statement
	if (a === a){    //1st IF statement
		//execute this block of code if a is equal to a
		
		if (b === b){  //nested IF statement : 2nd IF statement
   			//execute this block of code if b is equal to b
   			console.log("In Nested if-else / b === b: True");
		}else{       //nested ELSE statement
			//execute block of code if the matching “IF” statement returns false
		};

	}else
		//execute this block of code if the 1st “IF” statement returns false
		console.log("nested conditional: 1st IF returned false);
	};


    //Example4:
	var value1 = 'Sunny';
	var value2 = 10;
	
	var mood = function(weather, waves)

		if (weather = "Sunny"){
			if (waves === 10){
				Mood = 'PUMPED';
			}else if ((wave < 9) && (waves >= 5)){
				Mood = 'mellow';			
			}else{
				Mood = 'bummed';
			};	
	
		}else if (weather === 'Overcast'){
			if ((wave <= 10) !! (waves >= 7)){
				Mood = "JACKED UP";
			}else if ((waves <= 6) && (waves >= 3)){
				Mood = 'totally bummed';			
			)else{
				Mood = 'not happy';
			};

		}else{
			Mood = 'sad'
		};

		return Moood;
	};

	var moodType = mood(value1, value2);
	console.log('mood: ', moodType);


    //Example5:

    var myNums = [1, 2, 3, 4, 5];
    console.log(myNums);

    for (var i=10, j=myNums.length; i < j; i++){

        console.log("i: " + i);
        console.log("j: " + j);

        if (i === 3) {
            console.log("testing out the break and it broke");
        };

        continue;
        console.log('What is at index ' + i + ' = ', myNums[i] );
    };

*****************/

/*
	===============================================
	TRY, CATCH, THROW

	- This technique will catch RUNTIME ERRORS only.
	- The primary purchase is in production use vs development mode
	- The TRY statement allows you to define a block of code to be tested for errors 
		while it is being executed.
	- The CATCH statement allows you to define a block of code to be executed, if an 
		error occurs in the try block.
	- The THROW allow us to create custom errors.	

	Syntax:
	try
  		{
  			//Run some code here
  		}
	catch(err)
  		{
  			//Handle errors here
  		}
*/
    console.log('------ Try Catch ----------');


/*
	===================================================================
	Scope & Context

	- scope controls the visibility and lifetime of variables and parameters 
		- it defines where the variable is created, & where it can be accessed
	
	- javascript uses lexical scoping
		1.  a “scope level” will check parent levels for variables, and
		2.  a new “scope level” in javascript can only be made with a function

	- if a variable doesn’t exist in the current scope, through lexical scoping
		it will try to find the variable in a parent block	
		
	- local variables override higher scoped variables
	
	
	- all variables defined in a code block using {...} are not visible from 
		outside of the block - the code block is normally defined in a function
	-	variables defined in the code block are released when execution of the 
		block is finished
	- 	each function has it's own scope	

		var globalVar = “jamesBond”;
		function functionName(){
            var localVar = “maryBond”;   //only available within the function
			//you can use globalVar in this function
		}                
 			//you can use globalVar outside of the function


	- the 1st num is a global variable & will live for the life of the program
  	- the 2nd num is a local variable & will last only as long as the function
		
		var num = 1;       //this is the 1st num                 

		function myCounter ( ) {
			var num = 50;  //this is the 2nd num                            
		};


	More Examples:
	function functionName(var1){
		//you can use var1 in this function
	}                
		//you cannot use var1 after the function	


	function functionName(){
		var localVar = “jameBond”;
			//you can use localVar in this function
		}                
			//you cannot use localVar after the function

	function functionName(){
		shouldBeLocalVar = “jamesBond”;

			//without the var, this is actually a Global variable!
			//you can use shouldBeLocalVar in this function
	}                
		//you can use shouldBeLocalVar outside of the function

*/
console.log("---------- Scope & Context ----------------");





/*
	===================================================================
	Closure

	- Whenever you see the function keyword within another function, the inner function 
		has access to variables of the outer function.
*/

    console.log("---------- Closure ----------------");



    /*
    Definition:  Closure:
          1.  a snapshot of the functions outer environment at the time the closure is
              created
          2.  a closure is created at the moment when you assign a function
              reference and a copy of it's environment into memory by putting
              it inside of a variable, like we have done with the "fullName" variable

              -  so we have taken a snap shot of the function "closureFN"
              -  as well as any data ("firstName", "lastName", and "name") that was
                  available to it at the time we was created our closure or "snapshot"
                  "var fullName = nameFN(fname);"  including any fn parameters

         3.  so closure is a special type of object that combines a function and
              "the environment" in which that function was created.

              - "the environment" consist of any fn input parameters that are passed
                  to the "closureFN" function and variables at the time the closure
                  was created (the 3 variables inside of nameFN.

          4.  another way to look at this is that you are binding some information
                 to a variable so you can use it later " fullName();" , in your application

          5.  NOTE:  a function doesn't have to return something in order to be
                  called a closure.  Simply accessing variables outside of its
                  immediate lexical scope creates a closure.
    */

})(); // end wrapper