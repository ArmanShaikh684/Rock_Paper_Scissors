let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>
{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() *3); //generates random number between 0 to 2 since array size is between 0 to 2
    return options[randIdx]; //returns random index
    //rock,paper,scissors
};

const drawgame =() =>
{
    console.log("game was draw");
    msg.innerText = "Game Draw ! Play Again.";
    msg.style.backgroundColor="rgb(56, 6, 80)";
}

const showwinner =(userwin,userchoice,compchoice) =>
{       
    if(userwin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win");
        msg.innerText = `You Win ! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Loose");
        msg.innerText = `You Loose ! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame = (userchoice) =>
{
    console.log("userchoice : ",userchoice);

    //Generate computer choice
    const compchoice = genCompChoice();
    console.log("compchoice : ",compchoice);
    
    if(userchoice===compchoice)
    {
        //Draw game
        drawgame();
    }
    else
    {
        let userwin =true;
        if(userchoice==="rock")
        {
            // comp chooses scissors or paper
             userwin = compchoice==="paper" ? false : true;
        }
        else if(userchoice==="paper")
        {
            // comp chooses scissors or rock
            userwin = compchoice==="scissors" ? false : true;
        }
        else
        {
             // comp chooses scissors or rock
            userwin = compchoice==="rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
    
};



choices.forEach ((choice) =>
{
    
    choice.addEventListener("click",() =>
    {
        const userchoice=choice.getAttribute("id");
        
        playGame(userchoice);
    });
});