/*
fvcalc.js
*/


function calcfv() {
	//get data from the form
	var interestrate=document.getElementById("interestrate").value;
	var principle=document.getElementById("principle").value;
	var years=document.getElementById("years").value;
	//parse data to numbers
	interestrate=parseFloat(interestrate);
	principle=parseFloat(principle);
	years=parseFloat(years);
	//variables
	var months = parseFloat(0);
	var futurevalue=parseFloat(0);
	//change interest to monthly value
	interestrate=interestrate/12;
	//years to months
	months=years*12;
	//calculate future value
	futurevalue=principle*Math.pow(1+interestrate,months);
	//display on web page
	document.getElementById("result").innerHTML=futurevalue.toFixed(2);
	
}