	// JavaScript Document

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
  xhr.open("GET", "https://data.cityofnewyork.us/resource/bqiq-cu78.json", true);
  xhr.send();
	
}

function findid(input){
	document.getElementById("id").innerHTML = "";
	json = JSON.parse(xhr.responseText);
var table = "<tr><th>Complaint ID</th><th>Month Number</th><th>Category</th><th>Patrol Name</th><th>Complaint Year</th></tr>";

for(var i=0; i<json.length; i++){
var object = json[i];
	if(object.full_complaint_id.search(input) != -1){
			table+="<tr><td>"
			table+=object.full_complaint_id
			table+="</td><td>"
			table+=object.month_number
			table+="</td><td>"
			table+=object.offense_category
			table+="</td><td>"
			table+=object.patrol_borough_name
			table+="</td><td>"
			table+=object.complaint_year_number
			table+="</td></tr>"
	}
}

document.getElementById("result").innerHTML=table;
}

function findDesc(input){
	document.getElementById("desc").innerHTML = "";

var table = "<tr><th>Arrest Key</th><th>Description</th><th>Law Code</th><th>Age-Group</th></tr>";
for(var i=0; i<json.length; i++){
var object = json[i];
	if(object.complaint_year_number.search(input) != -1){
			table+="<tr><td>"
			table+=object.full_complaint_id
			table+="</td><td>"
			table+=object.month_number
			table+="</td><td>"
			table+=object.offense_category
			table+="</td><td>"
			table+=object.patrol_borough_name
			table+="</td><td>"
			table+=object.complaint_year_number
			table+="</td></tr>"
	}
}

document.getElementById("result").innerHTML=table;
}


/*
{
        "full_complaint_id": "201904600132799",
        "complaint_year_number": "2019",
        "month_number": "2",
        "record_create_date": "2019-02-08T00:00:00.000",
        "complaint_precinct_code": "46",
        "patrol_borough_name": "PATROL BORO BRONX",
        "county": "BRONX",
        "law_code_category_description": "FELONY",
        "offense_description": "FELONY ASSAULT",
        "pd_code_description": "ASSAULT 2,1,UNCLASSIFIED",
        "bias_motive_description": "ANTI-MALE HOMOSEXUAL(GAY)",
        "offense_category": "Sexual Orientation",
        "arrest_date": "2019-02-08T00:00:00.000",
        "arrest_id": "B19606200"
    },

*/

// JavaScript Document
