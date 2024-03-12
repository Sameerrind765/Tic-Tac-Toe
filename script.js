let checkboxes = [];
let reset_btn = document.getElementById("reset-btn");
let logbox = document.getElementById("playerLogs");
function start(){
    let start = [pram1,pram2]
}
function player_one(){
    
}
let playerO = {
    name: 'playerO',
    sign: 'O'
};
let playerX = {
    name: "playerX",
    sign: 'X'
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

assigncheckboxtoarray(checkboxes);

let write = (a) => {
    if (!a.innerHTML) {
        a.innerHTML = "O";
    } else {
        console.log("Already clicked");
    }
    gamewon(checkboxes);
};

function addingEventListenerstoarray(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        element.addEventListener("click", function () {
            write(element);
        });
    }
}

function winlog(playerLogs, info){
    playerLogs.innerHTML = info;
}

let resetBoard = (checkboxes, playerLogs) => {
    playerLogs.innerHTML = "";
    checkboxes.forEach((checkbox) => {
        checkbox.innerHTML = "";
    });
};
function winlogbox(checkboxes ,n){
    let winner = checkboxes[n].innerHTML;
    if(winner === "X"){
        let info = "X is a winner"
        winlog(playerLogs, info);
        console.log(info);
    }
    else if(winner === "O"){
        let info = "O is a winner"
        winlog(playerLogs, info)
        console.log(info);
    }
    else{
        let info = "something un exoected happened";
        winlog(playerLogs, info);
        console.log("its is not a X or O")
    }
    console.log(`Player ${winner} Has Won`);
}
function gamewon(win) {
    let values = win.map((checkbox) => checkbox.innerHTML);
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
            winlogbox(checkboxes,2)
        } else{
            console.log("technical error");
        };
        // winlog(logbox);
    } else {
        console.log("Game continues");
    }
}

addingEventListenerstoarray(checkboxes);
reset_btn.addEventListener("click", function () {
    resetBoard(checkboxes, logbox);
});
