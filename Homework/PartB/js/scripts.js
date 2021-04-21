// JavaScript source code
function order() {
    var time;
    var clientName;
    var streetAddress;
    var postalCode;
    var phoneNumber;
    var email;
    var choice;

    var message = "";
    var resultmessage = "Thank you for your order ";

    time = document.getElementById("time").value;
    clientName = document.getElementById("name").value;
    postalCode = document.getElementById("postol_code").value;
    streetAddress = document.getElementById("Street").value;
    email = document.getElementById("email").value;
    phoneNumber = document.getElementById("phone_number").value;
    choice = document.getElementById("choice").value;
   

    var vege_hamp = document.getElementById("vege_hamp").value;
    var fruit_hamp = document.getElementById("fruit_hamp").value;
    var fresh_chicken = document.getElementById("fresh_chicken").value;
    var pork = document.getElementById("pork").value;



    resultmessage = clientName + "\n" +
        streetAddress + "\n" + choice + "\n" +
        "Order" + vege_hamp + fruit_hamp + fresh_chicken + pork;


    document.getElementById("result").innerHTML = resultmessage;
    alert(resultmessage);


    
}
