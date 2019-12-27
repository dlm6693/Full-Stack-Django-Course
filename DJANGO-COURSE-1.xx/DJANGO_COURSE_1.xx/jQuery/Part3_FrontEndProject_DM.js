$.fn.extend({
    toggleText: function (a, b) {
        return this.text(this.text() == b ? a : b);
    }
});
var player1 = prompt("Player One: Enter Your Name, you will be Blue")
var player2 = prompt("Player Two: Enter Your Name, you will be Red")
var player1Text = player1 + ": it is your turn, please pick a column to drop your blue chip."
var player2Text = player2 + ": it is your turn, please pick a column to drop your red chip."

$('h3').text(player1Text)
$('button').not('#reset').click(function () {
    $('h3').toggleText(player2Text, player1Text)
})
// $(document).ready(newGame)
$('td').click(move)
$(document).on('click', '#reset', resetBoard)

function resetBoard(){
    $('button').not('#reset').css('background-color', 'rgb(240, 240, 240');
    newGame();
}

function newGame(){
    var player1 = prompt("Player One: Enter Your Name, you will be Blue")
    var player2 = prompt("Player Two: Enter Your Name, you will be Red")
    var player1Text = player1 + ": it is your turn, please pick a column to drop your blue chip."
    var player2Text = player2 + ": it is your turn, please pick a column to drop your red chip."
    $('.container').css('text-align', 'center');
    $('h1').text("Welcome to Connect Four!");
    $('h1').after("<h2>The object of this game is to connect four of your chips in a row!");
    $('h2').after("<h3>" + player1Text + "</h3>")
    $('#reset').remove()
}

function move(){
    var colIdx = $(this).parent().children().index($(this));
    var button = nextAvailable(colIdx)
    if ($('h3').text() === player2Text) {
        button.css('background-color', 'blue');
    } else {
        button.css('background-color', 'red');
    }
    if (checkHorizontalWin(button) || checkVerticalWin(colIdx) || checkDiagonalWin(button, colIdx)){
         $('h2').remove()
         $('h3').remove()
         if (button.css('background-color') === "rgb(255, 0, 0)"){
             $('h1').text(player2 + " has won! Click the button below to play again.");
         } else {
             $('h1').text(player1 + " has won! Click the button below to play again.");
         }
        $('h1').after("<button type='button' id='reset' class='btn btn-primary btn-lg' align='center'>Play Again</button>");
        $('#reset').wrap("<div class='col text-center'></div>")
     };
}

function nextAvailable(col_idx){
    var red_blue = ["rgb(255, 0, 0)", "rgb(0, 0, 255)"]
    for (i=-1; (i*-1) <= $('tr').length; i--){
        var button = $('tr').eq(i).children().eq(col_idx).children();
        if (!red_blue.includes(button.css('background-color'))){
            break;
        }
    }
    return button
}

const unique = (value, index, self) => {
    return self.indexOf(value) === index;
}
const allEqual = arr => arr.every(v => v === arr[0])

function checkHorizontalWin(button){
    var row = button.parent().parent();
    var colors = [];
    var red = "rgb(255, 0, 0)"
    var blue = "rgb(0, 0, 255)"
    var win = false
    for(i=0; i<row.children().length;i++){
        colors.push(row.children().eq(i).children().css('background-color'));
    }
    for(i=0; i < 4; i++){
      var same = colors.slice(i,i+4);
      if (allEqual(same) && (same.includes(red) || same.includes(blue))){
        win = true;
      }
    }
    return win
}

function checkVerticalWin(col_idx){
    var colors = []
    var red = "rgb(255, 0, 0)"
    var blue = "rgb(0, 0, 255)"
    var win = false
    for(i=0; i<7;i++){
            colors.push($('tr').eq(i).children().eq(col_idx).children().css('background-color'));
        }
    for (i = 0; i < 4; i++) {
        var same = colors.slice(i, i + 4);
        if (allEqual(same) && (same.includes(red) || same.includes(blue))) {
            win = true;
        }
    }
    return win  
}

function checkDiagonalWin(button, col_idx){
    var colors_1 = []
    var colors_2 = []
    var colors_3 = []
    var colors_4 = []
    var row_idx = button.parent().parent().index()
    var red = "rgb(255, 0, 0)"
    var blue = "rgb(0, 0, 255)"
    var win = false
    for (i=0; i<4; i++){
        if(row_idx+i>5 || col_idx+i>6){
            break
        } else {
            colors_1.push($('tr').eq(row_idx + i).children().eq(col_idx + i).children().css('background-color'));
        }
        if(row_idx+i === 5 || col_idx+i ===6){
            break
        }
    }
    for (i=0; i<4; i++){
        if(row_idx-i<0 || col_idx+i>6){
            break
        } else {
            colors_2.push($('tr').eq(row_idx - i).children().eq(col_idx + i).children().css('background-color'));
        }
        if (row_idx-i === 0 || col_idx+i ===6){
            break
        }
    }
    for (i = 0; i < 4; i++){
        if(row_idx+i>5 || col_idx-i<0){
            break
        } else {
            colors_3.push($('tr').eq(row_idx + i).children().eq(col_idx - i).children().css('background-color'));
        } if(row_idx+i === 5 || col_idx-i === 0){
            break
        }
    }
    for (i = 0; i < 4; i++){
        if(row_idx-i<0 || col_idx-i<0){
            break
        } else {
            colors_4.push($('tr').eq(row_idx + i).children().eq(col_idx - i).children().css('background-color'));
        } if(row_idx-i === 0 || col_idx-i === 0){
            break
        }
    }
    if ((allEqual(colors_1) && colors_1.length ===4 && (colors_1.includes(red) || colors_1.includes(blue))) || (allEqual(colors_2) && colors_2.length === 4 && (colors_2.includes(red) || colors_2.includes(blue))) || (allEqual(colors_3) && colors_3.length === 4 && (colors_3.includes(red) || colors_3.includes(blue))) || (allEqual(colors_4) && colors_4.length ===4 && (colors_4.includes(red) || colors_4.includes(blue)))){
        win = true;
    }
    return win
}
