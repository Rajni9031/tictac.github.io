console.log('Welcome to Tic tac Toe');
let music = new Audio('music.mp3');
let audioTurn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3');
let turn = "X";
let isgameover = false;

//Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"; 

}
//Function to check the winner

const checkwin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
     let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
     ]
     wins.forEach(e =>{
      if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== '')){
        document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "  won"
        isgameover = true;
        document.querySelector('.imgpic').getElementsByTagName('img')[0].style.width ="206px"
      }
     })
}

//Game Logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtexts = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtexts.innerText === ''){
            boxtexts.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerText = "Turn for  " + turn;
            } 
        }
    })
})

// Add Onclick Listener to reset button

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for  " + turn;
    document.querySelector('.imgpic').getElementsByTagName('img')[0].style.width ="0px"
})