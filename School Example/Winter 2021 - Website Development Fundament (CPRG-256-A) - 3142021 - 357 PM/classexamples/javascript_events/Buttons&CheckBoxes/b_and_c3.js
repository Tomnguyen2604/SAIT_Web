//b_and_c.js
window.onload=initfunction;

function initfunction()
{
//date formatting	
	var current_datetime = new Date()
	var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
	//console.log(formatted_date)

	document.getElementById("dtfield").innerHTML = formatted_date;
}

function buttonandchecks()
{
//this will use a 'for' loop to check the radio buttons and
//a series of 'if' statements to verify the check boxes
	var x;
	var clientname;
	var contactphone;
var message="";
var resultmessage="Thank you for your order ";
var giftamount=parseFloat(0);
var radio_value; //get value from radio button
	var totalvalue = parseInt(0); //initialize this to 0
	//get clientname and contactphone
	clientname = document.getElementById("clientname").value;
	contactphone = document.getElementById("contactphone").value;
	//add to message
	resultmessage += clientname;
	resultmessage += "<br>";
	
	


//use query selector to read values from the radio buttons and check boxes
radio_value=document.querySelector('input[name=specialty]:checked').value; //this reads the value assigned to the radio button that was checked
//parse radio_value to a float
		radio_value=parseFloat(radio_value);

//if statements to get the values from the check boxes
	//if elements are checked, the value is added in a running total and the message is being created
	if(document.querySelector('input[name=earrings]:checked'))
		{
		//giftamount+=100;//the giftamount will by increased by this value, in this case 100
		//vital: you must use parseFloat to convert the values from the check boxes to number amounts
		giftamount+=parseFloat(document.querySelector('input[name=earrings]:checked').value);
		message=(message+"<br>Earrings");
		}
	if(document.querySelector('input[name=broach]:checked'))
		{
		//giftamount+=150;
		giftamount+=parseFloat(document.querySelector('input[name=broach]:checked').value);
		
		message=(message+"<br>Broach");
		}
	if(document.querySelector('input[name=watch]:checked'))
		{
		//giftamount+=175;
		giftamount+=parseFloat(document.querySelector('input[name=watch]:checked').value);
		message=(message+"<br>Watch");
		}
	if(document.querySelector('input[name=necklace]:checked'))
		{
		//giftamount+=200;
		giftamount+=parseFloat(document.querySelector('input[name=necklace]:checked').value);
		message=(message+"<br>Necklace");
		}
//calculate total cost of gift
totalvalue=radio_value+giftamount;

resultmessage+=("Your Box will cost "+ radio_value.toFixed(2) + "<br>Your box contains: " + message + "<br>Total cost: $" + totalvalue.toFixed(2)+"<br>Contact Phone "+contactphone);

document.getElementById("result").innerHTML=resultmessage;

}