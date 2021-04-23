var xhr=new XMLHttpRequest();
//reference to parsed XML file
window.onload=loadXML;
function loadXML() {
	//create event listent
	document.getElementById("name").addEventListener("keyup", function (){ findname(this.value);},false);
	document.getElementById("count").addEventListener("keyup", function (){ findCount(this.value);},false);
	
	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
	
      json = JSON.parse(xhr.responseText);
		console.log(json);
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/35ra-9556.json", true);
  
  xhr.send();
	
}

function findname(input) {
	json = JSON.parse(xhr.responseText);
	var output1 = "<tr><th> Incident Info </th><th> Incident </th><th> Description </th><th> Year </th><th> Count </th><th>Location</th></tr><br>";
	for (var i = 0; i < json.length; i++) {
		var obj = json[i];
		if(obj.incident_info.toUpperCase().search(input.toUpperCase()) != -1){
			output1+="<tr><td>"
			output1+=obj.incident_info
			output1+="</td><td>"
			output1+=obj.description
			output1+="</td><td>"
			output1+=obj.start_dt
			output1+="</td><td>"
			output1+=obj.count
			output1+="</td><td>"
			output1+='<a href=https://www.google.com/maps/place/' + obj.location.latitude + ',' + obj.location.longitude
			output1+=">Location</a></td></tr><br>"
		}
	}
	document.getElementById("records").innerHTML = output1;
}

function findCount(input) {
	json = JSON.parse(xhr.responseText);
	var output1 = "<tr><th> Incident Info </th><th> Incident </th><th> Description </th><th> Year </th><th> Count </th><th>Location</th></tr><br>";
	for (var i = 0; i < json.length; i++) {
		var obj = json[i];
		if(obj.count.startsWith(input)){
			output1+="<tr><td>"
			output1+=obj.incident_info
			output1+="</td><td>"
			output1+=obj.description
			output1+="</td><td>"
			output1+=obj.start_dt
			output1+="</td><td>"
			output1+=obj.count
			output1+="</td><td>"
			output1+='<a href=https://www.google.com/maps/place/' + obj.location.latitude + ',' + obj.location.longitude
			output1+=">Location</a></td></tr><br>"
		}
	}
	document.getElementById("records").innerHTML = output1;
}

/*
[{"incident_info":" Northbound Deerfoot Trail approaching Southland Drive SE ","
description":"Two vehicle incident.","
start_dt":"2019-03-18T07:04:15.000",
"longitude":"-114.030831408227","latitude":"50.9612260750063",
"location":{"latitude":"50.961226075006","longitude":"-114.030831408227"},
"count":"1","id":"2019031807041550.9612260750063-114.030831408227","
:@computed_region_4a3i_ccfj":"3",":@computed_region_4b54_tmc4":"6","
:@computed_region_p8tp_5dkv":"5",":@computed_region_kxmf_bzkv":"93"}
*/


