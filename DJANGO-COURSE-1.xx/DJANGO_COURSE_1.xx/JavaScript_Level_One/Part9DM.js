var first = prompt("What is your first name?")
var last = prompt("What is your last name?")
var age = prompt("How old are you?")
var height = prompt("How tall are you in centimeters?")
var pet = prompt("What is your pet's name?")
var lastchar = pet[pet.length -1];

if (first[0] === last[0] && 20<age<30 && height>= 170 && lastchar === "y"){
    alert("Welcome back Mr. Bond")
} else{
    alert("Nice to meet you!")
}