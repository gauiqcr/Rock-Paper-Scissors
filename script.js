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
function playRound(playerChoice,computerChoice)
{
    let playerNumber=getChoiceNumber(playerChoice);
    let computerNumber=getChoiceNumber(computerChoice);
    if(computerNumber===(playerNumber+1)%3) return 1;
    else if(computerNumber===playerNumber) return 0;
    else return -1;
}
function game()
{
    let gameResult=0;
    for(let i=0;i<5;i++)
    {
        console.log(`Round ${i+1}:`);
        let playerChoice=prompt("Enter your choice").toLowerCase();
        let computerChoice=getComputerChoice();
        let roundResult=playRound(playerChoice,computerChoice);
        console.log(`   Your choice: ${playerChoice}`);
        console.log(`   Computer choice: ${computerChoice}`);
        switch(roundResult)
        {
            case -1:
                console.log(`   You lose, ${computerChoice} beats ${playerChoice}`);
                break;
            case 1:
                console.log(`   You win, ${playerChoice} beats ${computerChoice}`);
                break;
            default:
                console.log("   Draw!!");
        }
        gameResult+=roundResult;
    }
    if(gameResult>0)alert("Congratulation! You win this game");
    else if(gameResult<0) alert("Unfortunately you lose this game");
    else alert("It is a draw!!");
}