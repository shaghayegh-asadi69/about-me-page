"use strict";

let userName = prompt("Heey what's your name?");
alert("nice to meet you , " + userName);

let userClub = prompt("Do you want to be a member in our club?!");
//console.log(userClub);}
if (userClub === "yes" || userClub === "y") {
  //console.log("nice to have you!");
  alert("nice to have you!" + userName);
} else if (userClub === "no"|| userClub === "n");
  //console.log("no waay!");
  alert("no waaay!");

let userJob = prompt("Are you currently a student?!");
if (userJob === "yes" || userJob === "y") {
  //console.log("I bet you are a good one!");
  alert("I bet you are a good one! " + userName);
} else if (userJob === "no" || userJob === "n");
  alert("Same here!");


let userCity = prompt("Do you live in Liverpool?!");
if (userCity === "yes" || userCity === "y") {
  //console.log("heeya townsman!");
  alert("heeya townsman!");
} else if (userCity === "no"|| userCity === "n");
  //console.log("Same here!");
  alert("I'm really sorry to hear that, " + userName);


let user = prompt("Are you ready to go?");
if (user === "yes" || user === "y") {
  //console.log("I bet you are a good one!");
  alert("let's go for it!");
} else if (user === "no"|| user === "n");
  alert("I see!");


