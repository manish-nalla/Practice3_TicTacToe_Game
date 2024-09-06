console.log("Welcome to Tic Tac Toe");
let music = new Audio("game_music.mp3");
let turn = new Audio("Ping.mp3");
let gameover = new Audio("gameover.mp3");
let victory = new Audio("Victory.mp3");

let nextTurn = "X";

let gameover1 = false;

const changeTurn = () => {
    return nextTurn === "X" ? "0" : "X"
}

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0, 1, 2, 5, 5, 0],
        [3, 4, 5, 5, 15, 0],
        [6, 7, 8, 5, 25, 0],
        [0, 3, 6, -5, 15, 90],
        [1, 4, 7, 5, 15, 90],
        [2, 5, 8, 15, 15, 90],
        [0, 4, 8, 5, 15, 45],
        [2, 4, 6, 5, 15, 135]
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== '')) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            victory.play()
            gameover1 = true;
            document.getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = '20vw';
            document.querySelector('.line').style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        }
    })
}
music.play();

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = nextTurn;
            nextTurn = changeTurn();
            turn.play();
            checkWin();
            if (!gameover1) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + nextTurn;
            }
        }
    })
})


reset.addEventListener('click', () => {
    gameover.play()
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element => {
        element.innerText = ''
    });
    nextTurn = "X";
    gameover1 = false
    document.querySelector('.line').style.width = '0vw';
    document.getElementsByClassName("info")[0].innerText = "Turn for " + nextTurn;
    document.getElementsByTagName('img')[0].style.width = "0px"
})



