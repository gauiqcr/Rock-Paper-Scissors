function getComputerChoice()
{
    let choice=Math.floor(Math.random()*3);
    switch (choice)
    {
        case 0:return "rock";
        case 1:return "scissors";
        default: return "paper";
    }
}
function getChoiceNumber(choice)
{
    switch(choice.toLowerCase())
    {
        case "rock":return 0;
        case "scissors":return 1;
        case "paper":return 2;
        default:return -1;
    }
}
/**
    0:rock
    1:scissors
    2:paper
**/
function getWinner(playerChoice,computerChoice)
{
    let playerNumber=getChoiceNumber(playerChoice);
    let computerNumber=getChoiceNumber(computerChoice);
    if(computerNumber===(playerNumber+1)%3) return 1;
    else if(computerNumber===playerNumber) return 0;
    else return -1;
}
function playRound(e)
{
    if(playerScore>=5||computerScore>=5)return;
    this.classList.add("chosen");
    let playerChoice=this.id;
    let computerChoice=getComputerChoice();
    let res=getWinner(playerChoice,computerChoice);
    if(res===1)playerScore++;
    if(res===-1)computerScore++;
    let score=document.querySelector(".score");
    let roundResult=document.querySelector(".round-result");
    switch(res)
    {
        case -1:
            roundResult.textContent=`   You lose, ${computerChoice} beats ${playerChoice}.`;
            break;
        case 1:
            roundResult.textContent=`   You win, ${playerChoice} beats ${computerChoice}.`;
            break;
        default:
            roundResult.textContent="   Draw!!";
    }
    score.textContent=playerScore+"-"+computerScore;
    if(playerScore===5)
    {
        setTimeout(()=>document.body.innerHTML="<div class='statement'>You win this game!!!!</div>",2000);
    }
    if(computerScore===5)
    {
        setTimeout(()=>document.body.innerHTML="<div class='statement'>You lose this game!!!!</div>",2000);
    }
}
function removeChosen(e)
{
    if(!(this.classList.contains("chosen")&&e.propertyName==="transform"))return;
    this.classList.remove("chosen");
}
let playerScore=0,
    computerScore=0;
let button=document.querySelectorAll("button");
button.forEach((button)=>button.addEventListener("click",playRound));
button.forEach((button)=>button.addEventListener("transitionend",removeChosen));