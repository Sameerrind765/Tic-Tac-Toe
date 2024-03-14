document.addEventListener("DOMContentLoaded",function(){
    let checkboxes = [];
    let reset_btn = document.getElementById("reset-btn");
let logbox = document.getElementById("playerLogs");
let playerOne = {
    name: 'playerO',
    sign: "O",
    message: "playerO has won The Game"
};
let playerTwo = {
    name: "playerX",
    sign: "X",
    message: "playerX has Won The Game"
};
let assigncheckboxtoarray = () => {
    let rows = 3;
    let cols = 3;
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            let col = document.querySelector(`[row="${i}"][cols="${j}"]`);
            checkboxes.push(col);
        }
    }
    return checkboxes;
};

let current_player = playerOne;
 function switchPlayer(){
  current_player = (current_player === playerOne) ? playerTwo : playerOne;
  return current_player;
}
let write = (a,player) => {
    if (!a.innerHTML) {
        a.innerHTML = player.sign;
        switchPlayer();
        // highlightBet(player);
    } else {
        console.log("Already clicked");
    }
    gamewon(checkboxes);
};
function highlightBet(current_player){
    console.log(current_player);
    let playerX = document.getElementById("playerX");
    let playerO = document.getElementById("playerO");
    
    if(current_player === playerOne){

        playerO.classList.add('current_Player');
        playerX.classList.remove('current_Player');
        console.log("it's me, player X");
    } else {
        playerX.classList.add('current_Player');
        playerO.classList.remove('current_Player');
    }
}

function addingEventListenerstoarray(array,sign) {
    for (let element of array){
        element.addEventListener("click", function () {
            write(element,current_player);
        });
    }
}

function winlog(playerLogs, info){
    playerLogs.innerHTML = info;
    playerLogs.classList.add("current_Player")
}

let resetBoard = (checkboxes, playerLogs) => {
    playerLogs.innerHTML = "";
    checkboxes.forEach((checkbox) => {
        checkbox.innerHTML = "";
    });
};
function removehighlight(current_Player){
    let playerX = document.getElementById("playerX");
    let playerO = document.getElementById("playerO");
        playerX.classList.remove('current_Player');
        playerO.classList.remove('current_Player');
}
function checkTie(playerLogs,current_Player){
    let values = checkboxes.map((checkbox) => checkbox.innerHTML);
        let allNonEmpty = values.every(value => value.trim() !== '');
        if (allNonEmpty) {
            let info = "Its A Tie"
            winlog(playerLogs,info);
            removehighlight(current_Player);
        }
        else if(allNonEmpty !== checkboxes){
            highlightBet(current_Player);
        }
}
function winlogbox(checkboxes ,n,current_Player){
    removehighlight(current_Player);
    let winner = checkboxes[n].innerHTML;
    if(winner === "X"){
        let info = "Player One is a winner"
        winlog(playerLogs, info);
        console.log(info);
    }
    else if(winner === "O"){
        let info = "Player Two is a winner"
        winlog(playerLogs, info)
        console.log(info);
    }
    else{
        console.log("html has been access")
}
}
function gamewon(win) {
    let values = win.map((check) => check.innerHTML);
    if (
        (values[0] && values[0] === values[1] && values[1] === values[2]) || // first row
        (values[3] && values[3] === values[4] && values[4] === values[5]) || // second row
        (values[6] && values[6] === values[7] && values[7] === values[8]) || // third row
        (values[0] && values[0] === values[3] && values[3] === values[6]) || // first column
        (values[1] && values[1] === values[4] && values[4] === values[7]) || // second column
        (values[2] && values[2] === values[5] && values[5] === values[8]) || // third column
        (values[0] && values[0] === values[4] && values[4] === values[8]) || // first diagonal
        (values[2] && values[2] === values[4] && values[4] === values[6]) // second diagonal
    ) {
        if (values[0] && values[1] && values[2] && values[0] === values[1] && values[1] === values[2]) {
            winner = values[0];
            winlogbox(checkboxes,0)
        } else if (values[3] && values[4] && values[5] && values[3] === values[4] && values[4] === values[5]) {
            winner = values[3];
            winlogbox(checkboxes,3)
        } else if (values[6] && values[7] && values[8] && values[6] === values[7] && values[7] === values[8]) {
            winner = values[6];
            winlogbox(checkboxes,6)
        } else if (values[0] && values[3] && values[6] && values[0] === values[3] && values[3] === values[6]) {
            winner = values[0];
            winlogbox(checkboxes,0)
        } else if (values[1] && values[4] && values[7] && values[1] === values[4] && values[4] === values[7]) {
            winner = values[1];
            winlogbox(checkboxes,1)
        } else if (values[2] && values[5] && values[8] && values[2] === values[5] && values[5] === values[8]) {
            winner = values[2];
            winlogbox(checkboxes,2)
        } else if (values[0] && values[4] && values[8] && values[0] === values[4] && values[4] === values[8]) {
            winner = values[0];
            winlogbox(checkboxes,0)
        } else if (values[2] && values[4] && values[6] && values[2] === values[4] && values[4] === values[6]) {
            winner = values[2];
            winlogbox(checkboxes,2);
        }
    }
    else{
        checkTie(playerLogs,current_player);
        // highlightBet(current_player);
    }
}

reset_btn.addEventListener("click", function () {
    resetBoard(checkboxes, logbox);
});

function starttheGame(){
    let sign = "X"
    assigncheckboxtoarray(checkboxes);  
    addingEventListenerstoarray(checkboxes,sign);
    highlightBet(checkboxes);
}
highlightBet(checkboxes);    
starttheGame();   
})