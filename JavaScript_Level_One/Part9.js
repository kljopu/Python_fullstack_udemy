var first = prompt("Hello and Welcome. Please enter your first name:");

var last = prompt("Please enter your Last Name: ");

var age = prompt("How old are you?");

var height = prompt("How tall are you in centimeters? :")

var petName = prompt("What is the name of your pet? :")
var petLength = petName.length;

//trigger
var namecon = null;
var agecon = null;
var heightcon = null;
var petNamecon = null;




//condition check
if (age >= 20 && age <=30) {
    agecon = true;
} else {
    agecon = false;
}

if (first[0] == last[0]) {
    namecon = true;
} else {
    namecon = false;
}

if (height >= 170) {
    heightcon = true;
} else {
    heightcon = false;
}

if (petName[petName.length-1] ==="y") {
    petNamecon =true;
} else {
    petNamecon =false;
}

if ((namecon && agecon && heightcon && petNamecon) ===true) {
    
    console.log("Good afternoon Jame Bond. Here is the new mission");
    
} else {
console.log("YOU FAILED THE TEST");
}