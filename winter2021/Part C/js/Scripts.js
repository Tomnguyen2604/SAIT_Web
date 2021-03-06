var clientArray = [];
var searchBox = document.getElementById('input_client_search');
var client = {};
var order = {};


/* On Page Load*/
document.onload = loadFile();
document.onload = initialize();


/*Functions */
// loads the client data file in to the page
function loadFile() {
var filePath = "js/rentalclients.json";

var ajax = new XMLHttpRequest();

ajax.onreadystatechange = function () {
if (ajax.readyState == 4 && ajax.status == 200) {
  
clientArray = JSON.parse(ajax.responseText);
  
}
}

ajax.open('GET', filePath, true);
ajax.send();
}

function initialize() {
var todayDate = new Date();
document.getElementById('currentDate').innerHTML = todayDate;
searchBox.addEventListener('keyup', clientSearch);
}

function clientSearch() {

var resultsArray = [];
if (searchBox.value != "") {
for (let i = 0; i < clientArray.length; i++) {

var thisClient = clientArray[i];
var search = thisClient.last_name.search(searchBox.value);

if (search != -1) {
  
resultsArray.push(thisClient);
}
}
} else {
resultsArray = [];
}


clientSearchDisplayResults(resultsArray);
}

function clientSearchDisplayResults(resultsArray) {

var resultDisplay = '<ul>';

for (let i = 0; i < resultsArray.length; i++) {
var thisResult = resultsArray[i];
resultDisplay += '<li><button onclick="populateRentalForm(\'' + thisResult.email + '\')">';
resultDisplay += thisResult.first_name + ' ' + thisResult.last_name;
resultDisplay += '</button></li>';
}
resultDisplay += '</ul>';
document.getElementById('client_results').innerHTML = resultDisplay;

}

function populateRentalForm(selectedEmail) {
//get the proper client data
for (let i = 0; i < clientArray.length; i++) {
var thisClient = clientArray[i];
if (selectedEmail == thisClient.email) {
client = thisClient;
break;
}
}
console.log(client);

//populate the form inputs
document.getElementById('firstname').value = client.first_name;
document.getElementById('lastname').value = client.last_name;
document.getElementById('address').value = client.address;
document.getElementById('state_prov').value = client.state_prov;
document.getElementById('email').value = client.email;
document.getElementById('phone').value = client.phone;

var allInputs = document.querySelectorAll('input');
for (let i = 0; i < allInputs.length; i++) {
allInputs[i].disabled = false;
}
document.getElementById('submit_form').disabled = false;


}

function submitForm() {

var cFirstName = document.getElementById('firstname').value;
var cLastName = document.getElementById('lastname').value;
var cAddress = document.getElementById('address').value;
var cStateProv = document.getElementById('state_prov').value;
var cEmail = document.getElementById('email').value;
var cPhone = document.getElementById('phone').value;
  

client.first_name = cFirstName;
client.last_name = cLastName;
client.address = cAddress;
client.state_prov = cStateProv;
client.email = cEmail;
client.phone = cPhone;
  
order.client = client; 


var vehicleType = document.querySelector('input[name="vehicle_type[]"]:checked').value;

  

var noOfDays = document.getElementById('vehicle_days').value;


var vehiclePrice = 0;
switch (vehicleType) {
case 'Compact':
vehiclePrice = 15;
break;
case 'Mid-Size':
vehiclePrice = 20;
break;
case 'Luxury':
vehiclePrice = 35;
break;
case 'Van/Truck':
vehiclePrice = 40;
break;
}


var vehicleOptionsInputs = document.querySelectorAll('input[name="vehicle_options[]"]:checked');
var vehicleOptions = [];
  
for (let i = 0; i < vehicleOptionsInputs.length; i++) {
var thisInput = vehicleOptionsInputs[i];
vehicleOptions.push(thisInput.value);
if(thisInput.value == "roof_rack") {
vehiclePrice += 5;
}
if(thisInput.value == "gps") {
vehiclePrice += 10;
}
if(thisInput.value == "child_seat") {
vehiclePrice += 0;
}
}



order.vehicle = {};
order.vehicle.type = vehicleType;
order.vehicle.options = vehicleOptions;
order.vehicle.noOfDays = noOfDays;
order.vehicle.price = vehiclePrice;


// run the display function
displayOrder();
}
// display the order details on screen
function displayOrder() {
console.log(order);
// Create a display variable
var resultDisplay = '';
// put everything from the order object in to a nicely formatted display, inside the result variable
resultDisplay +='<div>';
resultDisplay += '<h4>Client Information</h4>';
resultDisplay += 'Name: ' + order.client.first_name + ' ' + order.client.last_name + '<br>';
resultDisplay += 'Address: ' + order.client.address + '<br>';
resultDisplay += 'State/Province: ' + order.client.state_prov + '<br>';
resultDisplay += 'Email: ' + order.client.email + '<br>';
resultDisplay += 'Phone: ' + order.client.phone + '<br>';
resultDisplay +='</div>';
resultDisplay +='<div>';
resultDisplay += '<h4>Rental Information</h4>';
resultDisplay += 'Vehicle Type: ' + order.vehicle.type + '<br>';
resultDisplay += 'Vehicle Options : <ul>';
for (let i = 0; i < order.vehicle.options.length; i++) {
resultDisplay +='<li>' + order.vehicle.options[i] + '</li>'
}
resultDisplay += '</ul>';
resultDisplay += 'Rental Days: ' + order.vehicle.noOfDays +'day(s)'+ '<br>';
resultDisplay += 'Rental Total Price: $' + (order.vehicle.price*order.vehicle.noOfDays).toFixed(2);
resultDisplay +='</div>';
// display the result variable on the innerHTML of the order display box
document.getElementById('rental_display').innerHTML = resultDisplay;
}