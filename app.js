let btn = document.getElementById("btn");
let btnSecond = document.getElementById("btn-second");

let userName = prompt("Heey what's your name?");
alert("nice to meet you , " + userName);

let userClub = prompt("Do you want to be a member in our club?!");
//console.log(userClub);}
if (userClub === "yes" || userClub === "y") {
  //console.log("nice to have you!");
  alert("nice to have you!" + userName);
} else {
  //console.log("no waay!");
  alert("no waaay!");
}

btn.addEventListener("click", function () {
  let getReady = prompt("Are you ready to go?")
  if (getReady === "yes" || getReady === "y") {
    //console.log("I bet you are a good one!");
    alert("let's go for it!" + userName);
  } else {
    alert("I see!");
  }

  let userJob = prompt("Are you currently a student?!");
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

let points = 0;
const number = 5;
btnSecond.addEventListener("click", function () {

let answer = prompt("Guess a number between 1 and 10");
for (let i = 4; i >=0 ; i--) {
  if (i === 0) {
    alert("sorry you are out of attempts");
    break;
  }

  if (answer < number) {
    alert("try again,too low.");
        attempts = prompt("you have" + i + "attempts left");

  } else if (answer > number) {
    alert("try again,too high.");
    attempts = prompt("you have" + i + "attempts left");
  } else {
    points++;
    alert("Are you a mind reader?");
    break;
  }
}
})