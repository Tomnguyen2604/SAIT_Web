debugger;

// Arrays are created by specifying the []
// DO NOT use the new Array(), even though it works
var myNotAnArray = new Array();

// But do not use this technique in a weakly typed language

myNotAnArray += "Milk";
myNotAnArray += "Butter";
myNotAnArray += "Eggs";

console.log("What can do wrong?");
console.log(myNotAnArray.length);   // output is 14    (the length of characters)
console.log(myNotAnArray);          // it is a String that was concatinated together

debugger;
// Do not create arrays this way, even though it works
var daysPerMonth = new Array(31, // January
                             28, // February
                             31, // March
                             30, // April
                             31, // May
                             30, // June
                             31, // July
                             31, // August
                             30, // September
                             31, // October,
                             30, // November
                             31 );

// Here is the reason why we do NOT want you using new Array
//    If you only define a single element in the array, it doesn't do what you expect
var daysInJanuary = new Array(31);
// The above statement created an array with 31 undefined elements!!!

debugger;

// https://www.w3schools.com/js/js_object_prototypes.asp
// Most new JavaScript developers believe this is a good way to create objects, but it is NOT
function MyObject(Name,Address,City,Prov) {
    this.Name = Name;
    this.Address = Address;
    this.City = City;
    this.Prov = Prov;
}
var myBadObject = new MyObject("Johnny Test","123 Easy Street","Ottawa","ON");
console.log("Everything is working great");
console.log(myBadObject);
// Lets add a new property called Postal
myBadObject.Postal = "H0H0H0";

console.log("Everything is working great, and we added the Postal Code");
console.log(myBadObject);

debugger;
/// Let update the definition of MyObject to always include a language of English
MyObject.Language = "English";

var myBadObject2 = new MyObject("Susan Test","234 Another Street","Ottawa","ON");
console.log(myBadObject2.Language);

debugger;
// You can create an object by using the new Object() as well
var myBadObject3 = new Object();

// Once the object is defined, you can add properties and functions using the dot notation
myBadObject3.Name = "Johnny Test";
myBadObject3.Address = "123 Santa Claus Lane";
myBadObject3.City = "Big Town";
myBadObject3.Province = "SK"
myBadObject3.Country = "Canada";
myBadObject3.Postal = "H0H0H0";
myBadObject3.Telephone = "555-555-6655";
myBadObject3.FullAddress = new function () {
    var output = "";
    output = `
${myBadObject3.Name}
${myBadObject3.Address}
${myBadObject3.City}, ${myBadObject3.Province}
${myBadObject3.Country} ${myBadObject3.Postal}
`;
    return output;
};

console.log("What can do wrong?");
console.log(myBadObject3);

console.log(myBadObject3.FullAddress);
// console.log(myBadObject3.FullAddress());

// the "new" in front of the function definition on line 49 is a problem
