// JavaScript source code
function pushName() {

    var firstname;
    var lastname;
    var postalcode;
    var phone;
    var email;


    firstname = document.getElementById("firstname").value;
    lastname = document.getElementById("lastname").value;
    postalcode = document.getElementById("postalcode").value;
    phone = document.getElementById("phone").value;
    email = document.getElementById("email").value
    message = firstname + " " + lastname + "\n" +
        "Postol Code: " + postalcode + "\n" +
        "\n" + phone +
        "\n" + email;
    alert(message);
    document.getElementById("print").innerHTML = message;


 
}
var array = [];
var i = 0;

function addClient() {


    var client_info = { firstname, lastname, postalcode, phone, email };
    client_info.lastname = document.getElementById("lastname").value;
    client_info.firstname = document.getElementById("firstname").value;
    client_info.address = document.getElementById("address").value;
    client_info.postalcode = document.getElementById("postalcode").value;
    client_info.email = document.getElementById("email").value;
    array.push(client_info);
    alert(client_info);
    displayList();


}
function displayList() {
    var client;
    var output = ""
    for (var i = 0; i < array.length; i++) {
        var client_info = { firstname, lastname, postalcode, phone, email };
        client_info = array[i];
        client = client_info.lastname + " , " + client_info.firstname + " , " + client_info.address + " , " + client_info.postalcode + " , " + client_info.email;

        output += "<input type=radio name=listitem ";
        output += " value=" + i + " ";
        output+=" onchange=deleteItem(this.value)>";
        output+=client + "<br>"
    }
    document.getElementById("message2").innerHTML = output;
}

function deleteItem(i) {
    array.splice(i, 1);
    displayList();
}