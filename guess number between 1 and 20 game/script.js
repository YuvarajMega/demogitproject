/*console.log(typeof 0.77);
let year;
console.log(year);
year = 1991;
year1 = "2001";
console.log(year);
let job = "System Engineer";
console.log(job, year);
const firstName = "Yuvaraj";
const lastName = "Meganathan";
console.log(firstName.concat(lastName));
let x = 90;
x++;
x++;
x += 4;
x /= 4;
x--;
console.log(x);
age1 = 1999;
age2 = 1966;
currentYear = 2024;
myage = currentYear - age1;
myfatherage = currentYear - age2;
console.log(myage, myfatherage);
console.log(
  `My age is ${myage} years but my fathers age is ${
    myfatherage - myage
  } years greater than me!`
);
console.log(myage > myfatherage);
console.log(Number(year1));
console.log(year1 + 87); //type coersion
console.log(Number(year1) + 87); //type conversion
console.log(typeof year1);
console.log(typeof NaN);
console.log(typeof undefined);
console.log(typeof Number("kanchana"));
console.log(Number("kanchana") + 87);
console.log(String(76) + 80); //type conversion
console.log("23" + "78" - 56);
console.log("I am " + 34 + " years old student"); //+ operator triggers to do type coersion
console.log("23" - "13" + 45); //here - opereator triggers type coersion to do convert string to number
//null,0,' ',undefined,NaN
console.log(typeof "");
console.log(typeof 0);
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean({})); //empty object
let money = 0;
if (money) {
  console.log(`Dont spend it all`);
} else {
  console.log(`you should get job soon`);
}
let children = "swathi";
if (children) {
  console.log(`child name mentioned`);
} else {
  console.log(`child name not mentioned`);
}

console.log("34" == 34); //loose operator type coersion
console.log("34" === 34); //strict operator not performing type coersion
let myyear1;
myyear1 = Number(prompt("Enter your birthyear"));
console.log(myyear1);
console.log(myyear1 - 1000);

console.log(document.querySelector("#pass").textContent);
console.log(document.querySelector("#staples-paragraph").textContent);
console.log(document.querySelector(".fraser").textContent);
//DOM- document object model- Structured representation of HTML documents
//allows javascript to access html elements and styles to manipulate them
*/
"use strict";
/*
console.log(document.querySelector(".message"));
console.log(document.querySelector(".message").textContent); //It displays only text content inside element
document.querySelector(".message").textContent = "Try Its your turn..."; //It will change the cotent inside the element
console.log(document.querySelector(".message").textContent); //It will log the updated content
//let try with change other elements value
//class with number and score
document.querySelector(".number").textContent = 23; //textcontent is must
document.querySelector(".score").textContent = 50; // it will update the content in score
console.log(document.querySelector(".guess").textContent);
document.querySelector(".guess").value = 67; //for input element always use value keyword
console.log(document.querySelector(".guess").value);
document.querySelector(".guess1").value = 34;
console.log(document.querySelector(".guess1").value);
console.log(document.querySelector(".message1").textContent); //It displays only text content inside element
document.querySelector(".message1").textContent = "Try again once more";
console.log(document.querySelector(".message1").textcontent);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let score1 = 40;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    //it is when input is empty
    document.querySelector(".message").textContent = "Please Enter any number";
  } else if (guess === secretNumber) {
    //when play guess correct number
    console.log(secretNumber);
    document.querySelector(".message").textContent =
      "Congratulations🥳 you got the lucky Number";
    document.querySelector(".number").textContent = secretNumber;

    //here we are going to do some css manipulation when player wins the background changes green and changes the score width
    document.querySelector("body").style.backgroundColor = "green"; //here we didnt change the css file but javascript always places in inline css
    //also in css we have some two words properties like font-size, background-color, here we should use it in camelCase only without space
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess < secretNumber) {
    //when player guessed number is too low
    if (score > 1) {
      console.log(secretNumber);
      document.querySelector(".message").textContent = "📈Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥you lost the game click on play again!";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess > secretNumber) {
    //when player guessed number is too high
    if (score > 1) {
      //score should not be less than 0 that why if condition used
      console.log(secretNumber);
      document.querySelector(".message").textContent = "📉Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent =
        "💥you lost the game click on play again";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".check1").addEventListener("click", function () {
  const guess1 = Number(document.querySelector(".guess1").value);
  console.log(guess1);

  if (!guess1) {
    document.querySelector(".message1").textContent = "Please Enter any number";
  } else if (guess1 === secretNumber) {
    console.log(secretNumber);
    document.querySelector(".message1").textContent =
      "Congratulations🥳 you got the lucky Number";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "green"; //here we didnt change the css file but javascript always places in inline css
    document.querySelector(".number").style.width = "30rem";
    if (score1 > highscore) {
      highscore = score1;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess1 < secretNumber) {
    if (score1 > 1) {
      console.log(secretNumber);
      document.querySelector(".message1").textContent = "📈Too Low!";
      score1--;
      document.querySelector(".score1").textContent = score1;
    } else {
      document.querySelector(".message1").textContent =
        "💥you lost the game and click on try again";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score1").textContent = 0;
    }
  } else if (guess1 > secretNumber) {
    if (score1 > 1) {
      console.log(secretNumber);
      document.querySelector(".message1").textContent = "📉Too High!";
      score1--;
      document.querySelector(".score1").textContent = score1;
    } else {
      document.querySelector(".message1").textContent =
        "💥Sorry!you lost the game and click on try again";
      document.querySelector("body").style.backgroundColor = "red";
      document.querySelector(".score1").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  score1 = 40;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "start guessing..."; //It will change the cotent inside the element
  document.querySelector(".message1").textContent =
    "Start Guessing another one...";
  document.querySelector(".guess").value = ""; //for input element always use value keyword
  document.querySelector(".guess1").value = "";
  document.querySelector("body").style.backgroundColor = "#222"; //here we didnt change the css file but javascript always places in inline css
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message1").textContent =
    "Start Guessing another number...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".score1").textContent = score1;
});
