// This is a technique called "namespacing", where we create a object
// and then assign properties to it that act like global variables
// but since only the object is global in scope, we lower the risk of someone else using it
var myFormNamespace = {};
myFormNamespace.ArrayOfInfoEntered = [];
myFormNamespace.ItemsEntered = -1;
myFormNamespace.Cursor = -1;



// This allows us to use a method to retrieve input field values based upon the id
function RetrieveInputValue(id) {
    var value = "";
    var elementFound = document.getElementById(id);
    if (elementFound && elementFound.value !== undefined) {
        value = elementFound.value;
    }
    else {
        console.log("Element '" + id + "' cannot be found");
    }
    return value;
}

// 
function ValidateForm() {
    var isValidForm = true;

    // Test each condition and if it fails, we set the isValidForm to false


    return isValidForm;
}

// Get each item from the screen, and create an object, and return it to the caller
function CreateObject() {
    var Information = {};
    Information.FullName = RetrieveInputValue('Name');
    Information.Address = RetrieveInputValue('Address');
    Information.City = RetrieveInputValue('City');
    Information.Email = RetrieveInputValue('Email');
    Information.HavePets = RetrieveInputValue('HavePet-No');
    return Information;
}

// Take the information entered on the screen, and add it to an array 
function AddToArray() {
    if (ValidateForm()) {
        // Convert the onscreen input fields into an object
        var Info = CreateObject();

        // Then add the object to the array
        if (Info) {
            // Increment by one, to get ready for the next position we will insert
            myFormNamespace.ItemsEntered++;
            myFormNamespace.ArrayOfInfoEntered[myFormNamespace.ItemsEntered] = Info;
        }

        // Update the onscreen display
        UpdateDisplay('ItemsEntered');
    }
}

function LoadNextFromArray() {
    myFormNamespace.Cursor++;
    if (myFormNamespace.Cursor > myFormNamespace.ItemsEntered) {
        myFormNamespace.Cursor = myFormNamespace.ItemsEntered;
    }
    // How would we transfer the information to the form from the array?
    // And how would we disable the Add button?
}

function LoadPrevFromArray() {
    myFormNamespace.Cursor--;
    if (myFormNamespace.Cursor < -1) {
        myFormNamespace.Cursor = 0;
    }
    // How would we transfer the information to the form from the array?
    // And how would we disable the Add button?
}

function DeleteFromArray(idx) {
    // How do we delete this item?
    UpdateDisplay('ItemsEntered');

}
function OutputHeaders() {
    var htmlFragment = `
<header>
    <span id="hdr-Id">Id</span>
    <span id="hdr-Name">Name</span>
    <span id="hdr-Address">Address</span>
    <span id="hdr-City">City</span>
    <span id="hdr-Email">Email</span>
    <span id="hdr-Pets">Pets</span>
    <span id="hdr-Actions">Actions</span>
</header>
    `;

    return htmlFragment;
}

function UpdateDisplay(id) {
    var htmlFragment = OutputHeaders();
    for (let idx = 0; idx < myFormNamespace.ArrayOfInfoEntered.length; idx++) {
        var rowFragment = "";
        // Retrieve the item from the array
        var currentRow = myFormNamespace.ArrayOfInfoEntered[idx];
        var rowId = idx + 1;
        if (currentRow) {
            // create a fragment of HTML and add it to htmlFragment
            rowFragment = `
<div class="Row" id='row-${idx}'>
    <span class="Row-Id">${rowId}</span>
    <span class="Row-Name">${currentRow}</span>
    <span class="Row-Address">${currentRow.Address}</span>
    <span class="Row-City">${currentRow.City}</span>
    <span class="Row-Email">${currentRow.Email}</span>
    <span class="Row-Pets">${(currentRow.HavePets == 0) ? "No" : "Yes"}</span>
    <span class="Row-Actions">
        <span class="Delete-Row" onclick="DeleteFromArray(${idx});">Delete</span>
    </span>
</div>
`;
        }
        htmlFragment += rowFragment;
    }

    // Find the form element and update it
    var outputElement = document.getElementById(id);
    if (outputElement && outputElement.innerHTML !== undefined) {
        outputElement.innerHTML = htmlFragment;
    }
}