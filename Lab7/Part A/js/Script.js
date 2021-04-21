var array = [];
var i = 0;

function addClient() {


    var client = { firstname, lastname, postalcode, phone, email };
    client.lastname = document.getElementById("lastname").value;
    client.firstname = document.getElementById("firstname").value;
    client.address = document.getElementById("address").value;
    client.postalcode = document.getElementById("postalcode").value;
	client.phone = document.getElementById("phone").value;
    client.email = document.getElementById("email").value;
    array.push(client);
    alert(client.toString());
    displayList();


}
function displayList() {
    var client;
    var output = ""
    for (var i = 0; i < array.length; i++) {
        var client = { firstname, lastname, postalcode, phone, email };
        client = array[i];
        client = client.lastname + " , " + client.firstname + " , " + client.address + " , " + client.postalcode + " , " + client.email;

        output += "<input type=radio name=listitem ";
        output += " value=" + i + " ";
        output+=" onchange=deleteItem(this.value)/>";
        output+=client + "<br>"
    }
	alert(output);
    document.getElementById("message2").innerHTML=output;
	
}

function deleteItem(i) {
    array.splice(i, 1);
    displayList();
}
function edititem(i) {
    index = i;
    var dataItem;
    var client = { 
        firstname,
        lastname,
        address,
        postalcode,
        phone,
        email,
        data: [],
        asset: []
    };
    client = array[i];
    document.getElementById("submit").disabled = true;
    document.getElementById("edit").disabled = false;
    document.getElementById("firstname").value=client.firstname;
    document.getElementById("lastname").value=client.lastname;
    document.getElementById("address").value=client.address;
    document.getElementById("postalcode").value=client.postalcode;
    document.getElementById("phone").value=client.phone;
    document.getElementById("email").value=client.email;
    document.getElementById("annual").value=client.annual;

    dataItem = client.info[0];
    if (dataItem == own) {
        document.register.own[0].checked = true;
    }
    else {
        document.register.own[1].checked = true;
    }
    document.register.vehicle.checked = false;
    document.register.rrsp.checked = false;
    document.register.tfsa.checked = false;
    document.register.rrif.checked = false;

    if (client.asset.length > 0) {
        for (var i = 0; i < client.asset.length; i++) {
            dataItem = client.asset[i];
            if (dataitem == "vehicle"){
                document.register.vehicle.checked = true;
            }
            if (dataItem == "rrsp") {
                document.register.rrsp.checked = true;
            }
            if (dataItem == "tfsa"){
                document.register.tfsa.checked = true;
            }
            if (dataItem == "rrif"){
                document.register.rrif.checked = true;
            }
        }
    }
}
function setClient(){
    var client = { firstname, lastname, postalcode, phone, email };
    client.lastname = document.getElementById("lastname").value;
    client.firstname = document.getElementById("firstname").value;
    client.address = document.getElementById("address").value;
    client.postalcode = document.getElementById("postalcode").value;
	client.phone = document.getElementById("phone").value;
    client.email = document.getElementById("email").value;
    
    var own = document.querySelector("input[name= own]:checked").value;
    client.info.push(own);
    if (document.querySelector("input[name=vehicle]:checked")){
        client.asset.push("vehicle");
    }
    if (document.querySelector("input[name=rrsp]:checked")){
        client.asset.push("rrsp");
    }
    if (document.querySelector("input[name=tfsa]:checked")){
        client.asset.push("tfsa");
    }
    if (document.querySelector("input[name=rrif]:checked")){
        client.asset.push("rrif");
    }
    array[index] = client;
    document.getElementById("submit").disabled = false;
    document.getElementById("edit").disabled = true;
    displayList();
}