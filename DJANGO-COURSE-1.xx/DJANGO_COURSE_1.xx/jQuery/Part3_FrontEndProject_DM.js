$.fn.extend({
    toggleText: function (a, b) {
        return this.text(this.text() == b ? a : b);
    }
});

var row = $('tr').eq(-1)

player1 = prompt("Player One: Enter Your Name, you will be Blue")
player2 = prompt("Player Two: Enter Your Name, you will be Red")
player1_text = player1 + ": it is your turn, please pick a column to drop your blue chip." 
player2_text = player2 + ": it is your turn, please pick a column to drop your red chip."


$('h3').text(player1_text)
$('button').click(function(){
    $('h3').toggleText(player2_text, player1_text)
})

$('td').click(move)


function move(){
    var idx = $(this).index();
    var box = row.children().eq(idx)
    var button = box.children()
    if (["rgb(255, 0, 0)", "rgb(0, 0, 255)"].includes(button.css('background-color'))) {
        changerow('up')
        if($('h3').text() === player2_text){
            button.css('background-color', 'blue');
        } else {
            button.css('background-color', 'red');
        };
    } else if ($('h3').text() === player2_text) {
        row = $('tr').eq(-1)
        button.css('background-color', 'blue');
    } else {
        row = $('tr').eq(-1)
        button.css('background-color', 'red');
    }
}
function changerow(direction){
    if (direction === 'up'){
        row = row.prev()
    } else if(direction === 'down'){
        row = row.next()
    }
    
}