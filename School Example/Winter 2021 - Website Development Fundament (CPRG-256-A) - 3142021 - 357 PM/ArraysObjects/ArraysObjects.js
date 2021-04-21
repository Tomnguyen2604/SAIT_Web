debugger;


// Arrays are created by specifying the []
var myArray = [];

// To add items, you can use an index and assign elements into the array
// they are added in the index you add them (first = element 0, second = element 1, etc.)
myArray[0] = "Milk";
myArray[1] = "Butter";
myArray[6] = "Eggs";            // This creates a sparse array
console.log(myArray.length);   // output is 7
console.log(myArray);
console.log(myArray[0]);       // output is Milk
console.log(myArray[1]);       // output is Butter
console.log(myArray[2]);       // output is undefined
console.log(myArray[3]);       // output is undefined
console.log(myArray[4]);       // output is undefined
console.log(myArray[5]);       // output is undefined
console.log(myArray[6]);       // output is Eggs


// You can also create an array and populate it at the time of creation
var daysPerMonth = [31, // January
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
                    31  // December
                   ];

var sparseArray = ["Sample",,,,1200,daysPerMonth,new Date(),"Keith"];

console.log(sparseArray);

debugger;
// You can create an object by using the { }
var myObject = {};

// Once the object is defined, you can add properties and functions using the dot notation
myObject.Name = "Johnny Test";
myObject.Address = "123 Santa Claus Lane";
myObject.City = "Big Town";
myObject.Province = "SK"
myObject.Country = "Canada";
myObject.Postal = "H0H0H0";
myObject.Telephone = "555-555-6655";
myObject.FullAddress = function () {
    var output = "";
    output = `
${myObject.Name}
${myObject.Address}
${myObject.City}, ${myObject.Province}
${myObject.Country} ${myObject.Postal}
`;
    return output;
};

console.log(myObject.FullAddress());