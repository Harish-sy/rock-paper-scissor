let userid = 0;
let computerid = 0;
const userid_span = document.getElementById('userid');
const computerid_span = document.getElementById('computerid');
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const sissors = document.getElementById("s");
const result = document.getElementById("result");


function computer(){
    const choices = ["r","p","s"];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
    
}



function game(userchoice){
    const computerchoice=computer();
     switch(userchoice + computerchoice){
       case "rs":
       case "pr":
       case "sp":
           win(userchoice);
           break;
       case "rp":
       case "pr":
       case "sr":
           lose(computerchoice);
           break;
      case "rr":
      case "pp":
      case "ss":
           draw(userchoice,computerchoice);
           break;   

   }
    
}
function converter(letter){
    if(letter==="r") return "rock";
    if(letter=== "p") return "paper";
    return "scissors";
    
}

function win(user){
   userid++;
   userid_span.innerHTML=userid;

   result.innerHTML= "yass!" +"  "+converter(user).fontsize(5)+ "   " +"WIN!!!";

  }

function lose(comp){
    computerid++
    computerid_span.innerHTML=computerid;
    result.innerHTML="oops! computer puts"+"  "+converter(comp).fontsize(5) + " " +"YOU LOST!!";
}
function draw(user,comp){
    result.innerHTML=converter(comp).fontsize(5) +"  " + "DRAW!!";
    
}


function main(){
rock.addEventListener("click",function(){game("r")});
paper.addEventListener("click",function(){game("p")});
sissors.addEventListener("click",function(){game("s")});
}

main();