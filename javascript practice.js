//if user enters name, assign to username, otherwise say "Hello"
let userName = "Luna";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

//user question to ask the Eight Ball
const userQuestion = "Will I get more kibbles?";

//logs to console user question
console.log(`${userName} asks: ${userQuestion}`);

//generates random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

//creates conditional statement to be assigned to Eight Ball depending on random number generated

switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidely so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
  default:
    console.log(`Uh oh, ask again!`);
}

// Print answer to console
console.log(`Magic Eight Ball answers: ${eightBall}`);
