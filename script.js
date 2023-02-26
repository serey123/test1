let cor = 0
let prcor = 0
let min = 1;
let max = 10;
document.querySelector("select").onchange = function(){
    let value = document.querySelector("select").value;
    /*if (value == "easy"){
        min = 1;
        max = 10;
    }
    if (value == "medium"){
        min = 10;
        max = 100;
    }
    if (value == "hard"){
        min = 100;
        max = 1000;
    }*/
    switch(value){
        case "easy":
            min = 1;
            max = 10;  
            break;
        case "medium":
            min = 10;
            max = 100;  
            break;
        case "hard":
            min = 100;
            max = 1000;  
            break;
        case "crasy":
            min = 1000;
            max = 10000;  
            break;
    }
}
document.querySelector(".add").onclick = function () {
    let num1 = getRandomInt(min, max);
    let num2 = getRandomInt(min, max);
    let correctAnswer = num1 + num2;
    let userAnswer = prompt(num1 + " + " + num2 + " = ", "");
    checkAnswer(userAnswer, correctAnswer);
}


document.querySelector(".subtract").onclick = function () {
    let num1 = getRandomInt(min, max);
    let num2 = getRandomInt(min, max);
    if (num1 < num2){
        let t = num1;
        num1 = num2;
        num2 = t;
    }
    let correctAnswer = num1 - num2;
    let userAnswer = prompt(num1 + " - " + num2 + " = ", "");
    checkAnswer(userAnswer, correctAnswer);
}


document.querySelector(".multiply").onclick = function () {
    let num1 = getRandomInt(min, max);
    let num2 = getRandomInt(min, max);
    let correctAnswer = num1 * num2;
    let userAnswer = prompt(num1 + " * " + num2 + " = ", "");
    checkAnswer(userAnswer, correctAnswer);
}


document.querySelector(".divide").onclick = function () {
    let num1 = getRandomInt(min, max);
    let num2 = getRandomInt(min, max);
    let res = num1 * num2
    num1 = res
    let correctAnswer = num1 / num2;
    let userAnswer = prompt(num1 + " : " + num2 + " = ", "");
    checkAnswer(userAnswer, correctAnswer);
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer == correctAnswer) {
        prcor += 1
        alert("\\/")
    } else {
        cor += 1
        alert(userAnswer + " -  ><, \\/ - " + correctAnswer);
    }
}
