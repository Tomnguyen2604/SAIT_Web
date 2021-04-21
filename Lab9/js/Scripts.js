//This will load and parse the XML file that will allow it to be searched
var xhr=new XMLHttpRequest();
var json;//reference to parsed XML 	file
window.onload=loadXML;

function loadXML() {
	
	//create event listent
	document.getElementById("id").addEventListener("keyup", function (){ findid(this.value);},false);
	document.getElementById("lname").addEventListener("keyup", function(){findlName(this.value);},false);
	document.getElementById("phone").addEventListener("keyup", function(){findPhone(this.value);},false);
	
	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      json = JSON.parse(xhr.responseText);
    }
  };
  xhr.open("GET", "js/ClientData.json", true);
  xhr.send();
	
}

function findid(id){
	document.getElementById("id").innerHTML = "";

var recordid;

var table = "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";

for(var i=0; i<json.length; i++){
var object = json[i];
	recordid=object.id;
	if(recordid==id){
			table+="<tr><td>"
			table+=object.id;
			table+="</td><td>"
			table+=object.firstName
			table+="</td><td>"
			table+=object.lastName
			table+="</td><td>"
			table+=object.address
			table+="</td><td>"
			table+=object.postalCode
			table+="</td><td>";
			table+=object.phone
			table+="</td><td>";
			table+=object.type
			table+="</td></tr>";
	}
}

document.getElementById("result").innerHTML=table;
}

function findlName(lname){
	document.getElementById("lname").innerHTML = "";

var recordName;

var table = "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";

for(var i=0; i<json.length; i++){
var object = json[i];
	recordName=object.lastName;
	if(recordName.startsWith(lname)){
			table+="<tr><td>"
			table+=object.id;
			table+="</td><td>"
			table+=object.firstName
			table+="</td><td>"
			table+=object.lastName
			table+="</td><td>"
			table+=object.address
			table+="</td><td>"
			table+=object.postalCode
			table+="</td><td>";
			table+=object.phone
			table+="</td><td>";
			table+=object.type
			table+="</td></tr>";
	}
}

document.getElementById("result").innerHTML=table;
}

function findPhone(phone){
	document.getElementById("phone").innerHTML = "";

var recordPhone;

var table = "<tr><th>ID</th><th>First Name</th><th>Last Name</th><th>Address</th><th>Postal Code</th><th>Phone</th><th>Type</th></tr>";

for(var i=0; i<json.length; i++){
var object = json[i];
	recordPhone=object.phone;
	if(recordPhone.startsWith(phone)){
			table+="<tr><td>"
			table+=object.id;
			table+="</td><td>"
			table+=object.firstName
			table+="</td><td>"
			table+=object.lastName
			table+="</td><td>"
			table+=object.address
			table+="</td><td>"
			table+=object.postalCode
			table+="</td><td>";
			table+=object.phone
			table+="</td><td>";
			table+=object.type
			table+="</td></tr>";
	}
}

document.getElementById("result").innerHTML=table;
}
