// NOTE:
//  These functions use a coding style which is call "defensive coding" in that
//  they do not just blindly use properties, or assume that accessing the DOM will 
//  always work (i.e., the sunny day scenario is not always true ).
//
//  This is in contrast to what you will see on most web sites, blogs, training courses, etc.
//  on the Internet you will find, that don't bother checking for error conditions.
//
//  They deliberately do not show you this technique, because they think that simple is better
//  for understanding when teaching beginners. 
//
//  Not learning the proper techniques leads to a lot of problems in your code, and frustration
//  for students who can't figure out what is causing the problem. By knowning the proper 
//  techniques, you end up writing better code and it will result in your code requiring a lot 
//  less support over the duration of the use of the software you developed.
//
//  Defensive programing is the perferred technique that we want you to learn.
//
//  Don't be lazy, your career depends on you learning the proper way to code
//  not the way that has the least number of lines of code, or runs the fastest. 
//
//  A comment about code stablity vs performance
//  --------------------------------------------
//  Code execution speed is almost always less important than bullet-proof code execution in
//  the "wilds" of the Internet.  How many times have you been frustrated by a web site that doesn't
//  work properly, and how did you feel about the company or developer that wrote buggy code?
//
//  You may have read, or believe that execution speed is more important, but I will tell you that
//  99% of all companies are more concerned with lowering the cost of supporting the software code
//  and only 1% of companies are concerned about execution speed (mostly gaming/simulation companies)
//
//  If you truely want performance, you WILL NOT WRITE IT IN AN INTERUPTED LANGUAGE
//
//  It is a fact that 80% or more of all costs for software are in the support of the software after
//  it has been created, and only 20% to 10% of the cost is in the original development of the software
//
//  The performance of computing devices doubles every 6 to 9 months. Performance is best handled
//  by the end user buying a decent computer, and then keeping their computer up to date if they 
//  truely care about "super fast" performance
//
//  Why are we using LET instead of VAR to declare variables?
//  ---------------------------------------------------------
//  You will also notice that these functions use the "let" instead of "var" to define variables
//  so that the scope of the variable is limited to the block that it was defined in (the function
//  or the { } block
//
//  For variables that cannot change their value, they are defined with the "const" to ensure that
//  they cannot be accidently changed once they have been initially set.
//
//  Why using JavaScript "Alert()" for bugging or display information is a bad thing
//  --------------------------------------------------------------------------------
//  Be very careful when using the JavaScript alert() function to display information on the web
//  browser, since when the alert is visible, no other JavaScript can execute
//     This is known as "blocking the execution" of other JavaScript, and it is highly discouraged
//
//     Using alert() is fine when you are first learning to write JavaScript, or if you need to quickly 
//     figure out the value, but there are much better techniques.  
//
//     Throughout this course, you will learn proper ways to debug JavaScript, and you will
//     stop using alert() entirely.
//
//     Professionally written JavaScript does not use "alert()"
//     If during a coding interview, I see someone using the alert() statement, they are instantly
//     disqualified from the job opportunity because I know they are not professional level developers
//     This is true of many companies, not just me.

/// Everything below this point in the file is JavaScript code, and comments to help you understand
///  the code and why it is writen the way it was written  (defensive programming techniques)

// This function will retrieve the value of a element on the web page
// that matchs the value of the id passed in as a parameter, and will 
// and display it in an alert dialog
function ShowFieldValue(idToFind) {
    // The debugger statement allows us to code a hard coded breakpoint
    // that will only be stopped on if the web browser is displaying the inspector
    debugger;           // We can comment this out, or remove it later after we have debugged our code

    const newline = "\n";       // We must escape the newline, since we can't type it or put it in quotes
    const quote = "'";          // A single quote must be enclosed by double-quotes or escaped as \'

    // Find a specific element on the web page, based upon the id
    let elementFound = document.getElementById(idToFind);
    // Note that elementFound is either undefined, or the HTML tag was found
    //  Even if the HTML tag was found, there is a chance that it is a tag that
    //  does not support the value attribute. In this case the value attribute
    //  will be undefined, so we must test that the element exists, and
    //  that the element has a value property before we can blindly reference the .value property
    if (elementFound && elementFound.value !== undefined) {
        // We are concatinating strings by using the + between the string values
        // If any of the values is a number, it will be converted to a string before concatination
        let msg = "Field " + quote + idToFind + quote + newline + " contains value " + newline
            + quote + elementFound.value + quote;
        console.log(msg);
        //  It is always better to write debugging information into the web browser console, and
        //  to not use the alert() function of JavaScript
        alert(msg);     // this is for demonstration only -- do NOT use alert in your code
    }
    else {
        //  The element didn't exist, or the HTML tag doesn't support values
        let errMessage = "Could not find element with id '" + idToFind + "' or it does not support values";
        console.log(errMessage);
        alert(errMessage);      // this is for demonstration only -- do NOT use alert in your code
    }
}

// This function will retrieve all the input field defined in the web page
// and filter out the buttons, and write the name followed by the value into
// the element whose id matched the value passed into the function
function ShowFormData(updateFieldWithId) {
    // The debugger statement allows us to code a hard coded breakpoint
    // that will only be stopped on if the web browser is displaying the inspector
    debugger;           // We can comment this out, or remove it later after we have debugged our code

    const newline = "<br/>";    // For HTML, we use <br/> instead of the linefeed
    const quote = "&quot;";     // For HTML, we use a symbol for quotes, instead of '
    let htmlFragment = "";      // this will be the HTML fragment we'll write to the screen

    // Find all the input fields on the HTML page
    let inputFieldsFound = document.getElementsByTagName('input');
    // Note that inputFieldsFound is always a collection with zero or more matches
    // even if the Tag we searched for is not present in the HTML markup
    // so we need to test the value assigned to the variable is valid
    if (inputFieldsFound && inputFieldsFound.length > 0) {
        // Since it is a collection, it has a length, and we can use
        // the for loop to iterate through all the items in the collection
        for (let idx = 0; idx < inputFieldsFound.length; idx++) {
            // Test to make sure it isn't a button
            if (inputFieldsFound[idx].type === "button" || inputFieldsFound[idx].type === "submit" || inputFieldsFound[idx].type === "reset") {
                // ignore buttons
            }
            else {
                // The Input is not a button, so we can report its name and value
                // as long as the input tag supports the value property
                if (inputFieldsFound[idx].value !== undefined) {
                    // We are concatinating strings by using the + between the string values
                    // If any of the variables/values is numeric, it will be converted to a string
                    // before the concatination occurs
                    htmlFragment = htmlFragment + inputFieldsFound[idx].name + " = " + quote + inputFieldsFound[idx].value + quote + newline;
                }
            }
        }
    }

    // Output the HTML fragment to the element requested
    let elementFound = document.getElementById(updateFieldWithId);
    if (elementFound) {
        // Replace the existing HTML inside the element with the new HTML fragment
        elementFound.innerHTML = htmlFragment;
    }
    else {
        // Can't find that element, so write the information into the web browser
        // console log for developers to see what was the problem
        console.log("Could not find element '" + updateFieldWithId + "'");
        console.log(htmlFragment);
    }
}

// This is a self-calling function that will call itself after it has been called the first time
// It uses the JavaScript timer method setTimeout(), to call itself again every 1 second
//
//   Note that when an "Alert()" dialog is open, the function gets blocked
//   and the updating of the on-screen clock stops until the alert dialog is closed
//
function ShowDateTime() {
    const waitMilliseconds = 1000;  // equal to 1 second
    const updateFieldWithId = "time-update";
    // If we are called too early, the document will be in readyState == "loading"
    // and any attempt to access the document.getElementByID() will fail because the DOM has not
    // yet loaded properly
    if (document.readyState == "complete") {
        // debugger;
        // Get the current time on the user's computer
        let timeNow = new Date();
        // Create some HTML so we can write it to the screen
        let htmlFragment = "<span class='timestamp'>" + timeNow + "</span>";

        // Output the HTML fragment to the element requested
        let elementFound = document.getElementById(updateFieldWithId);
        if (elementFound) {
            // Replace the existing HTML inside the element with the new HTML fragment
            elementFound.innerHTML = htmlFragment;
            // Wait for 1 second, then call ourselves again so that the screen updates every 1 second
            setTimeout(ShowDateTime, waitMilliseconds);
        }
        else {
            // Can't find that element, so write the information into the web browser
            // console log for developers to see what was the problem, and don't call ourselves
            console.log("Could not find element '" + updateFieldWithId + "' to update timestamp");
            console.log(htmlFragment);
        }
    }
}

// When you need to call many JavaScript functions when the web page is loaded, you should
// instead use this method, which creates an unnamed function, which will be called when the
// web page is fully loaded, and ready to execute code
//
//  You put all your methods inside this unnamed function, so that
//   It is also an alternative way instead of using the onload="ShowDateTime()" on the <body> tag
//
//  Since you can only assign one function to the document.onload, if you were to assign multiple
//  functions, only the last function you assigned would actually be executed when the page DOM is
//  finished loading
/*
document.onload = function () {
    // debugger;     // Use a hard coded breakpoint if you want to debug when it is triggered
                     // since you can't invoke the inspector in the web browser fast enough to
                     // set the soft breakpoints
    ShowDateTime();
    AnotherFunction();
    MoreStuff("param1","param2");
}
*/
