console.log("Welcome to tictactoe")
let turn= "X"
let gameover = false

// Function to change turn
const changeturn = () =>{
    return turn === "X"?"0" : "X"
}

// Function to check win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
            gameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="100px"
        }

    })

}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeturn();
            checkwin();
            if(!gameover){

                document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
            }
        }
    })
})


//reset 
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText = ""
    })
    turn = "X"
    gameover = false
    document.getElementsByClassName('info')[0].innerText = "Turn for " + turn
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width ="0px"
})