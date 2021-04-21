
window.onload = initfunction;

function initfunction() {

    window.onload = function datetime() {
        var today = new Date();
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        document.getElementById("current").innerHTML = "Today is:" + "  " + month[today.getMonth()] + "/" + today.getDate() + "/" + today.getFullYear();
    }
}
function price() {
    var phone; 
    var name;
    var pickup;  

    phone = document.getElementById("phone").value;
    name = document.getElementById("name").value;
    pickup = document.getElementById("date").value;


    var resultmessage = "Thank you for your order ";

    var quantityMargherita = parseInt(document.getElementById("margherita").value);
    var quantityQuattro = parseInt(document.getElementById("quattro").value);
    var quantityCapricciosa = parseInt(document.getElementById("capricciosa").value);

    var quantitySchnitzel = parseInt(document.getElementById("schnitzel").value);
    var quantityMixed_Grill = parseInt(document.getElementById("mixed_grill").value);
    var quantityBeef_on_bun = parseInt(document.getElementById("beef_on_bun").value);

    var quantityCoffee = parseInt(document.getElementById("coffee").value);
    var quantityLatte = parseInt(document.getElementById("latte").value);
    var quantitySoft_drink = parseInt(document.getElementById("soft_drink").value);

    var priceMargherita = 12.00;
    var priceQuattro = 12.50;
    var priceCapricciosa = 13.00;

    var priceSchnitzel = 8.50;
    var priceMixed_Grill = 12.00;
    var priceBeef_on_bun = 10.00;

    var priceCoffee = 2.00;
    var priceLatte = 2.50;
    var priceSoft_drink = 1.75;

    var totalMargherita = quantityMargherita * priceMargherita;
    var totalQuattro = quantityQuattro * priceQuattro;
    var totalCapricciosa = quantityCapricciosa * priceCapricciosa;

    var totalSchnitzel = quantitySchnitzel * priceSchnitzel;
    var totalMixed_Grill = quantityMixed_Grill * priceMixed_Grill;
    var totalBeef_on_bun = quantityBeef_on_bun * priceBeef_on_bun;

    var totalCoffee = quantityCoffee * priceCoffee;
    var totalLatte = quantityLatte * priceLatte;
    var totalSoft_drink = quantitySoft_drink * priceSoft_drink;

    var total = totalMargherita + totalQuattro + totalCapricciosa + totalSchnitzel + totalMixed_Grill + totalBeef_on_bun + totalCoffee + totalLatte + totalSoft_drink;

    resultmessage += name;
    resultmessage += "<br>";
    resultmessage += phone;
    resultmessage += "<br>"

    resultmessage += ("Hello, " + name + ". Your pickup will be ready at: " + "Your total bill is: " + total);
    document.getElementById("result").innerHTML=resultmessage;
}
