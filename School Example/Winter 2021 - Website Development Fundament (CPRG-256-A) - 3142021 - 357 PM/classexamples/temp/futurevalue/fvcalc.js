/*
fvcalc.js
*/

function calcfv() {
	//get data from form
	var interestrate=document.getElementById("interestrate").value;
	var principle=document.getElementById("principle").value;
	var years=document.getElementById("years").value;
	//alert("Interest: "+interestrate+" principle "+principle+" years"+years);
	//variable for future value calculation
	//note use 'parse' to 'force' values to 'number types'
	var months=parseFloat(0);
	var futurevalue=parseFloat(0);
	//parse data from form to number types
	interestrate=parseFloat(interestrate);
	principle=parseFloat(principle);
	years=parseFloat(years);
	//change these values by dividing or multiplying by 12 - monthly values
	interestrate=interestrate/12;
	months=years*12;
	futurevalue=principle*Math.pow(1+interestrate,months);
	//alert("Future Value: "+futurevalue);
	//display future value on web page
	//display future value to 2 significant digits
	document.getElementById("result").innerHTML=futurevalue.toFixed(2);
		
	
}