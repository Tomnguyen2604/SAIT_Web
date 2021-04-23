var xhr=new XMLHttpRequest();
//reference to parsed XML file
window.onload=loadXML;
function loadXML() {
	//create event listent
	document.getElementById("name").addEventListener("keyup", function (){ findname(this.value);},false);
	document.getElementById("sqft").addEventListener("keyup", function (){ findSqft(this.value);},false);
	
	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
	
      json = JSON.parse(xhr.responseText);
		console.log(json);
    }
  };
  xhr.open("GET", "https://data.calgary.ca/resource/c2es-76ed.json", true);
  
  xhr.send();
	
}

function findname(input) {
	json = JSON.parse(xhr.responseText);
	var output = "<tr><th> Permit Number </th><th> Status Current </th><th> Permit Type </th><th> Community Name</th><th> Location</th></tr><br>";
	for (var i = 0; i < json.length; i++) {
		var obj = json[i];
		if(obj.permitnum.startsWith(input)){
			output+="<tr><td>"
			output+=obj.permitnum
			output+="</td><td>"
			output+=obj.statuscurrent
			output+="</td><td>"
			output+=obj.permittype
			output+="</td><td>"
            output+=obj.communityname
			output+="</td><td>"
			output+='<a href=https://www.google.com/maps/place/' + obj.latitude + ',' + obj.longitude
			output+=">Location</a></td></tr><br>"
		}
	}
	document.getElementById("records").innerHTML = output;
}


/*
{"permitnum":"BP2021-06514","statuscurrent":"Pending Plans Review",
"applieddate":"2021-04-21T00:00:00.000","permittype":"Residential Improvement Project","
permittypemapped":"Building","permitclass":"1301 - Private Detached Garage","
permitclassgroup":"Garage","permitclassmapped":"Residential","workclass":"New","workclassgroup":"New","workclassmapped":"New","description":"Garage","housingunits":"0","estprojectcost":"42433.6",
"originaladdress":"102 SKYVIEW RANCH BV NE","communitycode":"SKR","communityname":"SKYVIEW RANCH","latitude":"51.16112501264851","longitude":"-113.95081702388617","location":{"latitude":"51.16112501264851","longitude":"-113.95081702388617","human_address":"{\"address\": \"\", \"city\": \"\", \"state\": \"\", \"zip\": \"\"}"},"locationcount":"2","locationtypes":"Titled Parcel;Building","locationaddresses":"102 SKYVIEW RANCH BV NE;102 SKYVIEW RANCH BV NE","locationswkt":"MULTIPOINT (-113.95081702388617 51.16112501264851,-113.95064491747526 51.16111661583703)","locationsgeojson":"{\"type\":\"MultiPoint\",\"coordinates\":[[-113.95081702388617,51.16112501264851],[-113.95064491747526,51.16111661583703]]}",":@computed_region_4b54_tmc4":"11",":@computed_region_4a3i_ccfj":"4",":@computed_region_kxmf_bzkv":"12",":@computed_region_p8tp_5dkv":"1"}
*/


