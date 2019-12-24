$.fn.extend({
    toggleText: function (a, b) {
        return this.text(this.text() == b ? a : b);
    }
});

player1 = prompt("Player One: Enter Your Name, you will be Blue")
player2 = prompt("Player Two: Enter Your Name, you will be Red")
player1_text = player1 + ": it is your turn, please pick a column to drop your blue chip." 
player2_text = player2 + ": it is your turn, please pick a column to drop your red chip."


$('h3').text(player1_text)
$('button').click(function(){
    $('h3').toggleText(player2_text, player1_text)
})

function turnRed(object){
    return object.css('background', 'red');
}

function turnBlue(object){
    return object.css('background', 'blue');
}

$('button').eq(-1).toggle(function(){this.css('background', 'blue')}, function(){this.css('background', 'red')});