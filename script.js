// Quiz Questions
const questions = [
    {
        question: "What tool is used to write a stunning email using magic prompts?",
        options: ["ChatGPT", "Jasper", "Grammarly", "Mail AI"],
        answer: "ChatGPT"
    },
    {
        question: "Which tool helps in writing personalized cold emails that get you 10X more replies?",
        options: ["Copilot", "Scalenut", "Flowrite", "Smart Writer"],
        answer: "Copilot"
    },
    {
        question: "What tool do you use to get AI to reply to your emails?",
        options: ["Flowrite", "HyperWrite", "Line AI", "Copy AI"],
        answer: "Flowrite"
    },
    {
        question: "Which tool provides a message hack to increase your reply rate?",
        options: ["Engage AI", "Type AI", "LeWriter.com", "Engage.io"],
        answer: "Engage.io"
    },
    {
        question: "What tool is used to summarize anything on the web and chat with it?",
        options: ["Merlin", "QuillBot", "Hemingway", "ProWritingAid"],
        answer: "Merlin"
    },
    {
        question: "Which tool is used to summarize a super long book or research paper?",
        options: ["Humata", "Bird AI", "Linguix", "Crammerly"],
        answer: "Humata"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const resultBox = document.getElementById("result-box");
const scoreDisplay = document.getElementById("score");

// Display the current question
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionText.textContent = currentQuestion.question;

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Shuffle options randomly
    const shuffledOptions = [...currentQuestion.options].sort(() => Math.random() - 0.5);

    // Add options as buttons
    shuffledOptions.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(button, option === currentQuestion.answer));
        optionsContainer.appendChild(button);
    });
}

// Handle answer selection
function selectAnswer(button, isCorrect) {
    const buttons = optionsContainer.querySelectorAll(".option-btn");
    buttons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    nextButton.style.display = "block";
}

// Move to the next question
function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        nextButton.style.display = "none";
        displayQuestion();
    } else {
        showResults();
    }
}

// Show the final results
function showResults() {
    questionText.style.display = "none";
    optionsContainer.style.display = "none";
    nextButton.style.display = "none";

    resultBox.style.display = "block";
    scoreDisplay.textContent = score;
}

// Restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    questionText.style.display = "block";
    optionsContainer.style.display = "block";
    resultBox.style.display = "none";

    displayQuestion();
}

// Initialize quiz
displayQuestion();
