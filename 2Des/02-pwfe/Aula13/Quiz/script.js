const question = document.querySelector("h2");
const options = document.querySelector("select");
const answer = document.querySelector("input[type=text]");
const send = document.querySelector("input[type=button]");
const streakText = document.querySelector("#streak");
const answersText = document.querySelector("#answers");

import questions  from "./questions.js";

console.log(questions);

var questionIndex = 0;
var maxQuestion = 0;
var correctAnswer = 0;
var streak = 0;
var finished = false;


const alreadyAnswered = [];

window.onload = () => {
    maxQuestion = questions.length;
    selectRandomQuestion();
}

send.addEventListener("click", () => {
    checkAnswer();
})

window.oncontextmenu = (event) => {
    event.preventDefault();
    event.stopPropagation();
    return false;
}

document.addEventListener("keydown" , (event) => {

    console.log(event.key);
    if (event.key === "Enter") {
        checkAnswer();
    } else if (event.key == "Control") {
        selectRandomQuestion();
    }
});

function checkAnswer() { 

    if(questions[questionIndex].type === "select") {
        if (options.value === "invalid") {
            alert("Por favor, selecione uma opção!");
        } else {
            if (options.value == questions[questionIndex].answer) {
                correctAnswer++;
                streak++;
            } else {
                streak = 0;
            }
            alreadyAnswered.push(questionIndex);
            selectRandomQuestion();
        }
    } else {

        if (answer.value.toLowerCase() == questions[questionIndex].answer.toLowerCase()) {
            correctAnswer++;
            streak++;
        } else {
            streak = 0;
        }
        answer.value = "";
        alreadyAnswered.push(questionIndex);
        selectRandomQuestion();
    }
}

function selectRandomQuestion() {

    if (finished) {
        return;
    }

    streakText.innerText = streak;
    answersText.innerText = alreadyAnswered.length;

    if (alreadyAnswered.length == maxQuestion) {
        finishGame();
    }

    const index = Math.floor(Math.random() * questions.length);
    if (alreadyAnswered.includes(index)) {
        selectRandomQuestion();
    } else {

        if(questions[index].options) {
            options.classList.remove("hidden");
            answer.classList.add("hidden");
        } else {
            options.classList.add("hidden");
            answer.classList.remove("hidden");
        }

        questionIndex = index;
        question.innerHTML = questions[questionIndex].text;
    
        if(questions[index].options.length > 0) {
            options.innerHTML = `
                <option value="invalid" disabled selected>Selecione uma opção</option>
            `;
            for (let i = 0; i < questions[questionIndex].options.length; i++) {
                const option = document.createElement("option");
                option.innerText = questions[questionIndex].options[i];
                option.value = questions[questionIndex].options.indexOf(questions[questionIndex].options[i]);
                options.appendChild(option);
            }
        } else {
            answer.innerHTML = ""
            answer.classList.remove("hidden");
        }
    }
}

function finishGame() {
    finished = true;
    alert("Acertou " + correctAnswer + " questões e o seu streak foi de " + streak + " questões.");
}