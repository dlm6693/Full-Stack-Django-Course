var hot = false
var temp = 50

if (temp>80) {
    console.log("Lord its hot!")
} else if (temp<40) {
    console.log("Brrrito")
} else {
    console.log("Pefect weather isn't LA")
}

var ham= 10;
var cheese = 10;

var report = "blank";

if (ham >= 10 && cheese >=10) {
    report = "Strong sales of both ham and cheese!"
} else if (ham===0 && cheese === 0) {
    report = "nothing sold"
} else {
    report = 'We had some sales of items'
}

console.log(report);
