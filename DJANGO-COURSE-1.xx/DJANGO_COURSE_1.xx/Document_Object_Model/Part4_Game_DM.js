var boxes = document.querySelectorAll("td");
var button = document.querySelector("a");

boxes.forEach(item => {
    item.addEventListener('click', event => {
        if (item.textContent === ''){
            item.textContent = 'X';
        } else if (item.textContent === 'X'){
            item.textContent = 'O'
        } else{
            item.textContent=''
        }
        
    })
})

button.addEventListener('click', clearboard)

function clearboard(){
    boxes.forEach(item => {
        item.textContent='';
    })
}