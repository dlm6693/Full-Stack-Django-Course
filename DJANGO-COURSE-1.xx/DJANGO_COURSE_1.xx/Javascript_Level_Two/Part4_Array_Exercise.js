// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT

// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array
function addNew(student, roster) {
    roster.push(student)
}

// REMOVE STUDENT

// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//
function remove(student, roster){
    var idx = roster.indexOf(sutdent)
    if (idx > -1){
        roster.splice(idx, 1);
    }
}
// DISPLAY ROSTER

// Create a function called display that prints out the roster to the console.
function display(roster){
    console.log(roster);
}

function quit(){
    alert("Thanks for using the Web App! Please refresh the page to start over.");
}
var yes = ["yes", "yep", "yeah", "yeh", "ye", "y"];
// Start by asking if they want to use the web app
var start = prompt("Would you like to use the web app?").toLowerCase();
// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
action = "";
if (yes.includes(start)){
    while (action !== "quit"){
        action = prompt("Please select an action: add, remove display or quit.").toLowerCase();
        if (action === "add"){
            name = prompt("What name would you like to add?");
            addNew(name, roster);
        } else if (action === "remove"){
            name = prompt("What name would you like to remove?");
            remove(name, roster);
        } else if (action === "display"){
            display(roster);
        } else {
            alert("Not recognized, quitting.")
            request = "quit"
        }
    }
}
quit()