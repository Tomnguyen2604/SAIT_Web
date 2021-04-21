//functions that generate lotto-649 numbers
window.onload=initFunction;

//NOTE: DON'T DO THIS: window.onload=initFunction(); don't use ()!!!

function initFunction(){
	
	var toDay = new Date();	
		
	document.getElementById("dtfield").innerHTML = toDay;
	
}

function generateTicket() {
	//creates table of lottery tickets
	var lotterydate = document.getElementById("luckyday").value;
	var i=0; //our counter
	var getnum; //our random number
	var luckynumbertable = "<table><tr>";
	for(i=0;i<6;i++)
	{
		luckynumbertable += "<td>";
		//get random number;
		getnum = Math.floor(Math.random() * 49) + 1;
		luckynumbertable += getnum;
		luckynumbertable += "</td>";
	}
	luckynumbertable += "</tr></table>";
	//display
	document.getElementById("luckynumbers").innerHTML = luckynumbertable;
	document.getElementById("lotteryday").innerHTML = lotterydate.toString();
}
