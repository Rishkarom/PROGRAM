let humancount = 0;
let compcount = 0;
let humanchoice;
let result = "";
const ResultElement=document.getElementById("result");
const computerchoiceElement = document.getElementById("computer-choice");
const humanchoiceElement = document.getElementById("human-choice");
const humanScoreElement = document.getElementById("human-score");
const computerScoreElement = document.getElementById("computer-score");
const overallResultElement = document.getElementById("overall-result");
let computerchoice ;
function getresult(s1,s2){
    console.log("Your choice: " + s1);
    humanchoiceElement.innerHTML = s1;
    console.log("Computer's choice: " + s2);
    computerchoiceElement.innerHTML = s2;
    if(s1==s2){
        return "It's a tie!";
    }else if(
        (s1=="rock" && s2=="scissors") ||
        (s1=="paper" && s2=="rock") ||
        (s1=="scissors" && s2=="paper")
    ){
        humancount++;
        return "You win! "+s1+" beats "+s2;
        
    }else{
        compcount++;
        return "Computer wins! "+s2+" beats "+s1;
    }
}

const mybutton=document.querySelectorAll("button");
mybutton.forEach(function(button) {
    button.addEventListener("click", function() {
       computerchoice = Math.floor(Math.random()*3);
if (computerchoice === 0) {
    computerchoice = "rock";
} else if (computerchoice === 1) {
    computerchoice = "paper";
} else {
    computerchoice = "scissors";
}
console.log("Your score: " + humancount);
console.log("Computer's score: " + compcount);
}
);
}
);


const rock=document.getElementById("rock");
rock.addEventListener("click", function() {
    humanchoice = "rock";
    result = getresult(humanchoice, computerchoice);
    console.log(result);
    ResultElement.innerHTML = result;
    humanScoreElement.innerHTML = humancount;
computerScoreElement.innerHTML = compcount;

});
const paper=document.getElementById("paper");
paper.addEventListener("click", function() {
    humanchoice = "paper";
    result = getresult(humanchoice, computerchoice);
    console.log(result);
    ResultElement.innerHTML = result;
    humanScoreElement.innerHTML = humancount;
computerScoreElement.innerHTML = compcount;
});
const scissors=document.getElementById("scissors");
scissors.addEventListener("click", function() {
    humanchoice = "scissors";
    result = getresult(humanchoice, computerchoice);
    console.log(result);
    ResultElement.innerHTML = result;
    humanScoreElement.innerHTML = humancount;
computerScoreElement.innerHTML = compcount;
});






