// This function will calculate the board feet based upon input fields
// that appear on the form, and the values that each field has
function CalculateBoardFeet() {
    let qtyBoards = 0;
    let lenFeet = 0;
    let lenInches = 0;
    let lenFeetInch = 0;
    let widthInches = 0;
    let thicknessInches = 0;
    let calcBoardFeetbyBoard = 0;
    let calcBoardFeet = 0;
    try {
        // We need to convert the text values to a floating point number for math
        qtyBoards = parseFloat(getFieldValue('qty'));
        lenFeet = parseFloat(getFieldValue('lengthFeet'));
        lenInches = parseFloat(getFieldValue('lengthInch'));
        lenFeetInch = lenFeet + (lenInches / 12.0);
        widthInches = parseFloat(getFieldValue('width'));
        thicknessInches = parseFloat(getFieldValue('thickness'));
//        debugger;
        calcBoardFeetbyBoard = lenFeetInch * widthInches * thicknessInches ;
        calcBoardFeet = qtyBoards * calcBoardFeetbyBoard;
    }
    catch {

    }

    // Output the HTML fragment to the element requested
    let elementFound = document.getElementById('total-board-feet');
    if (elementFound) {
        // Replace the existing value of the element with the new HTML fragment
        // Note we are output a float point number rounded to 4 decimal places 
        elementFound.value = calcBoardFeet.toFixed(4);
    }
    else {
        // Can't find that element, so write the information into the web browser
        // console log for developers to see what was the problem
        console.log("Could not find element 'total-board-feet'");
        console.log(htmlFragment);
    }
}

// This function will retrieve the value of a element on the web page
// that matchs the value of the id passed in as a parameter, and will 
// return the value to the caller
function getFieldValue(idToFind) {
    let value = undefined;
    var elementFound = document.getElementById(idToFind);
    if (elementFound && elementFound.value !== undefined) {
        value = elementFound.value;
    }
    return value;
}