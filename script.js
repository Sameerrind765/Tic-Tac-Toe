let checkboxes = [];
let reset_btn = document.getElementById("reset-btn");

let playerO = {
    name : 'playerO',
    sign : 'O'
}
let playerx = {
    name : "playerX",
    sign : 'X'
}

let assigncheckboxtoarray = () => {
    let rows = 3;
    let cols = 3;
    for(let i=1;i<=rows;i++){
        for(let j=1;j<=cols;j++){
            let cols = document.querySelector(`[row="${i}"][cols="${j}"]`);
            checkboxes.push(cols);
        }
    };
    return checkboxes;
}
assigncheckboxtoarray(checkboxes);
let write = (a) => {
    a.innerHTML = "x";
}
console.log(checkboxes);
checkboxes[1].addEventListener("click", function (){
    write(checkboxes[1])
})

let resetBoard = (checkboxes) => {
    for(let i = 0; i < 9; i++){
        checkboxes[i].innerHTML = "";
    }
}

let test = [];
function updateValue(){
    for(let i=0;i<checkboxes.length;i++){
        test[i] = checkboxes[i].innerHTML;
    }
    // console.log(test);
    return test;
}

function gamewon(win){
    updateValue();
    if(win[0] == win[1] && win[1] == win[2]){ // first row
    console.log("win");
}
else if(win[3] == win[4] && win[4] == win[5]){ //second row
    console.log("win");
}
else if(win[6] == win[7] && win[7] == win[8]){ // third row
    console.log("win");
}
else if(win[0] == win[3] && win[3] == win[4]){ //first col 0 3 6
    console.log("win");
}
else if(win[1] == win[4] && win[4] == win[7]){ // sec col 147
    console.log("win");
}
else if(win[2] == win[5] && win[5] == win[8]){ // thir col 258
    console.log("win");
}
else if(win[0] == win[4] && win[4] == win[8]){ //1st diag 048
    console.log("win");
}
else if(win[2] == win[4] && win[4] == win[7]){ //1st diag 247
    console.log("win");
}
else{
    console.log("game continues")
}
    return win;
}




// console.log(checkboxes);
// updateValue();
gamewon(test);
reset_btn.addEventListener("click", function (){
    resetBoard(checkboxes)
})
// console.log(checkboxes);
// console.log(test);
