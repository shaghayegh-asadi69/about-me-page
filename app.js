let btn = document.getElementById("btn");
let btnSecond = document.getElementById("btn-second");

let userName = prompt("Heey what's your name?");
alert("nice to meet you , " + userName);

let userClub = prompt("Do you want to be a member in our club?!".toLowerCase());
//console.log(userClub);}
if (userClub === "yes" || userClub === "y") {
  //console.log("nice to have you!");
  alert("nice to have you!" + userName);
} else {
  //console.log("no waay!");
  alert("no waaay!");
}
/*
btn.addEventListener("click", function () {
  let getReady = prompt("Are you ready to go?").toLowerCase();;
  if (getReady === "yes" || getReady === "y") {
    //console.log("I bet you are a good one!");
    alert("let's go for it!" + userName);
  } else {
    alert("I see!");
  }

  let userJob = prompt("Are you currently a student?!").toLowerCase();
  if (userJob === "yes" || userJob === "y") {
    //console.log("I bet you are a good one!");
    alert("I bet you are a good one! " + userName);
  } else {
    alert("Same here!");
  }

  let userCity = prompt("Do you live in Liverpool?!");
  if (userCity === "yes" || userCity === "y") {
    //console.log("heeya townsman!");
    alert("heeya townsman!");
  } else {
    alert("I'm really sorry to hear that " + userName);
  }
});
*/
btnSecond.addEventListener("click", function () {
  const number = "7";
//  console.log(number);

  for (let i = 2; i >= 0; i--) {
    let guesses = i + 1;

    let guess = prompt(
      "Guess a number between 1 and 10! you have " + guesses + " attempts"
    );

    const guessNum = parseInt(guess);

    if (guessNum === number) {
      // console.log("You win");
      alert("You win");
      break;
    } else if (guessNum < number) {
      // console.log("to low");
      alert("to low");
    } else if (guessNum > number) {
      // console.log("to high");
      alert("to high");
    }

    if (i === 0) {
      alert("The correct number was " + number);
      break;
    }
  }
});

btn.addEventListener("click", function () {


 const theGuessingGame = ["Do you want to be a member in our club?!","Are you ready to go?", "Do you live in Liverpool?!"]

 const theCorrectAnswers = ["yes,I do","yes,let's go!","yes,I live in Liverpool" ]

 const possibleAnswers= ["nope,I'm  good","you go first", "why would I"]

 for (i = 0; i < 3; i++) {
   let answer = prompt(theGuessingGame[i]);
   console.log(theGuessingGame);
   if (answer == "yes") {alert (theCorrectAnswers[i]);
     //You need an array for your responses
   } else if (answer == "no") {alert(possibleAnswers[i]);
     //you need an array for if they respond incorrectly
   }
 }});