
let gameseq=[];
let userseq=[];

let buts4=["yellow","purple","red","green"]

let started=false;
let level=0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    // console.log("game started");
    if(started == false){
        console.log("game started");
        started = true;
        levelup();
    }

});

function levelup(){
    userseq = [];
    level++;
    h2.innerText=`level ${level}`;

    // random btn choose
    let randIdx=Math.floor(Math.random()*3);
    let randcolor=buts4[randIdx];
    let randbut=document.querySelector(`.${randcolor}`);

    // console.log(randIdx);
    // console.log(randbut);
    // console.log(randcolor);

    gameseq.push(randcolor);
    console.log(gameseq);
    butflash(randbut);


}

function butflash(btn5){
    btn5.classList.add("flash");
    setTimeout(function(){
        btn5.classList.remove("flash");
    },250);
}

function userflash(btn5){
    btn5.classList.add("userflash");
    setTimeout(function(){
        btn5.classList.remove("userflash");
    },250);
}


let allBtns=document.querySelectorAll(".btn");

for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function btnpress(){
    // console.log(this);
    let btn =this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

function checkans(idx){

    if(userseq[idx] === gameseq[idx]){
        // console.log("same values");
        if(userseq.length == gameseq.length){
            setTimeout(levelup(),1000);
        }
    }else{
        h2.innerHTML=`Game Over ! Your Score Was <b>${level} <b> <br> Press any key to start .`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },100);
        reset();
    }

}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}