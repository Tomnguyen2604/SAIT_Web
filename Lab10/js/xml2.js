
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
  xhr.open("GET", "https://data.cityofnewyork.us/resource/uip8-fykc.json", true);
  xhr.send();
	
}

function findid(input){
	document.getElementById("id").innerHTML = "";
	json = JSON.parse(xhr.responseText);
var table = "<tr><th>Arrest Key</th><th>Description</th><th>Law Code</th><th>Age-Group</th></tr>";

for(var i=0; i<json.length; i++){
var object = json[i];
	if(object.arrest_key.search(input) != -1){
			table+="<tr><td>"
			table+=object.arrest_key
			table+="</td><td>"
			table+=object.ofns_desc
			table+="</td><td>"
			table+=object.law_code
			table+="</td><td>"
			table+=object.age_group
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
	if(object.age_group.search(input) != -1){
			table+="<tr><td>"
			table+=object.arrest_key
			table+="</td><td>"
			table+=object.ofns_desc
			table+="</td><td>"
			table+=object.law_code
			table+="</td><td>"
			table+=object.age_group
			table+="</td></tr><br>"
	}
}

document.getElementById("result").innerHTML=table;
}


/*
{
        "arrest_key": "220756993",
        "arrest_date": "2020-11-19T00:00:00.000",
        "pd_cd": "155",
        "pd_desc": "RAPE 2",
        "ky_cd": "104.0",
        "ofns_desc": "RAPE",
        "law_code": "PL 1303001",
        "law_cat_cd": "F",
        "arrest_boro": "B",
        "arrest_precinct": "41",
        "jurisdiction_code": "0",
        "age_group": "18-24",
        "perp_sex": "M",
        "perp_race": "BLACK",
        "x_coord_cd": "1013232",
        "y_coord_cd": "236725",
        "latitude": "40.816391847000034",
        "longitude": "-73.89529641399997",
        "geocoded_column": {
            "type": "Point",
            "coordinates": [
                -73.89529641399997,
                40.816391847000034
            ]
        },
        ":@computed_region_f5dn_yrer": "8",
        ":@computed_region_yeji_bk3q": "5",
        ":@computed_region_92fq_4b7q": "43",
        ":@computed_region_sbqj_enih": "24",
        ":@computed_region_efsh_h5xi": "10937"
    },

*/

// JavaScript Document
