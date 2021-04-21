// JavaScript Document
var xhr=new XMLHttpRequest();
var json;//reference to parsed XML file
window.onload=loadXML;

function loadXML() {

	
	
	//create event listent
	document.getElementById("id").addEventListener("keyup", function (){ findid(this.value);},false);
	document.getElementById("desc").addEventListener("keyup", function (){ findDesc(this.value);},false);
	
	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      json = JSON.parse(xhr.responseText);
    }
  };
  xhr.open("GET", "https://data.cityofnewyork.us/resource/whux-iuiu.json", true);
  xhr.send();
	
}

function findid(input){
	document.getElementById("id").innerHTML = "";
	json = JSON.parse(xhr.responseText);
var table = "<tr><th>Bin Number</th><th>Building</th><th>Sqft</th><th>Types</th></tr>";

for(var i=0; i<json.length; i++){
var object = json[i];
	if(object.bin_number.search(input) != -1){
			table+="<tr><td>"
			table+=object.bin_number
			table+="</td><td>"
			table+=object.building
			table+="</td><td>"
			table+=object.sqft
			table+="</td><td>"
			table+=object.types
			table+="</td></tr>"
	}
}

document.getElementById("result").innerHTML=table;
}

function findDesc(input){
	document.getElementById("desc").innerHTML = "";

var table = "<tr><th>Bin Number</th><th>Building</th><th>Sqft</th><th>Types</th></tr>";
for(var i=0; i<json.length; i++){
var object = json[i];
	if(object.types.search(input) != -1){
			table+="<tr><td>"
			table+=object.bin_number
			table+="</td><td>"
			table+=object.building
			table+="</td><td>"
			table+=object.sqft
			table+="</td><td>"
			table+=object.types
			table+="</td></tr>"
	}
}

document.getElementById("result").innerHTML=table;
}


/*
[
    
    {
        "bin_number": "2009911",
        "building": "Bronx Bergen Building",
        "sqft": "* 90,000",
        "fuel_oil_2_b5_delivery": "N/A",
        "fuel_oil_2_delivery_2": "N/A",
        "fuel_oil_4_delivery_2": "1740",
        "fuel_oil_6_delivery_2": "N/A",
        "types": "Gas Primary/FO Secondary"
    },
*/

