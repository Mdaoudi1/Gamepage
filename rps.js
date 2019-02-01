function playRPS(){
    var x = document.getElementById("userInput");
    x=x.value.toLowerCase();
    var computer = randomRPS();
    document.getElementById("userOutput").innerHTML = "User chose "+ x;
    document.getElementById("computerOutput").innerHTML = "Computer chose "+ computer;
    if(x==computer){
        document.getElementById("rpsOutput").innerHTML = "Tie!";
    }
    else if((x=="rock"&& computer =="scissors")||(x=="scissors"&& computer =="paper")||(x=="paper"&& computer =="rock")){
        document.getElementById("rpsOutput").innerHTML = "You Win!";
    }
    else{
        document.getElementById("rpsOutput").innerHTML = "You Lose :(";
    }
    
}
function randomRPS(){
    var num1 = Math.floor(Math.random()*3)+1;
    var cguess;
    if(num1==1){
        cguess="rock";
        return cguess;
    }
    else if(num1==2){
        cguess="paper";
        return cguess;
    }
    else{
        cguess="scissors";
        return cguess;
    }
}
