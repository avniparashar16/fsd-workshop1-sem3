/* =========================
   QUESTIONS
========================= */

let questions = [

    {
        question: "What does HTML stand for?",

        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyper Tool Markup Language",
            "Home Text Markup Language"
        ],

        answer: 0
    },


    {
        question: "Which language is used to style a web page?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],

        answer: 1
    },


    {
        question: "Which language is used to make web pages interactive?",

        options: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],

        answer: 2
    },


    {
        question: "Which HTML tag is used to create a paragraph?",

        options: [
            "<p>",
            "<h1>",
            "<br>",
            "<div>"
        ],

        answer: 0
    },


    {
        question: "Which CSS property changes text color?",

        options: [
            "background",
            "font-size",
            "color",
            "text-style"
        ],

        answer: 2
    },


    {
        question: "Which keyword is used to declare a variable in JavaScript?",

        options: [
            "variable",
            "let",
            "declare",
            "value"
        ],

        answer: 1
    },


    {
        question: "What does DOM stand for?",

        options: [
            "Document Object Model",
            "Data Object Model",
            "Document Oriented Method",
            "Data Oriented Model"
        ],

        answer: 0
    },


    {
        question: "Which method is used to display a message in the console?",

        options: [
            "print()",
            "console.log()",
            "display()",
            "write()"
        ],

        answer: 1
    },


    {
        question: "Which tool is used for version control?",

        options: [
            "Git",
            "HTML",
            "CSS",
            "Bootstrap"
        ],

        answer: 0
    },


    {
        question: "Which JavaScript library is used to build user interfaces?",

        options: [
            "React",
            "MySQL",
            "Git",
            "MongoDB"
        ],

        answer: 0
    }

];


/* =========================
   VARIABLES
========================= */

let currentQuestion = 0;

let score = 0;


/* =========================
   START QUIZ
========================= */

document.getElementById("studentForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        currentQuestion = 0;

        score = 0;


        /* Hide start page */

        document.getElementById("startPage").style.display =
            "none";


        /* Show quiz page */

        document.getElementById("quizPage").style.display =
            "block";


        /* Hide result page */

        document.getElementById("resultPage").style.display =
            "none";


        /* Show first question */

        showQuestion();

    }
);


/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

    let q = questions[currentQuestion];


    /* Show question number */

    document.getElementById("questionNumber").textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    /* Show question */

    document.getElementById("question").textContent =
        q.question;


    /* Show four options */

    for (let i = 0; i < 4; i++) {

        document.getElementById("option" + i).textContent =
            q.options[i];

    }


    /* Remove previous selection */

    let options =
        document.getElementsByName("answer");


    for (let i = 0; i < options.length; i++) {

        options[i].checked = false;

    }


    /* Last question */

    if (currentQuestion == questions.length - 1) {

        document.getElementById("nextButton").style.display =
            "none";

        document.getElementById("submitButton").style.display =
            "inline-block";

    }

    else {

        document.getElementById("nextButton").style.display =
            "inline-block";

        document.getElementById("submitButton").style.display =
            "none";

    }

}


/* =========================
   NEXT QUESTION
========================= */

function nextQuestion() {

    /* Find selected option */

    let selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );


    /* Check whether an option is selected */

    if (selected == null) {

        alert("Please select an answer!");

        return;

    }


    /* Check the answer */

    if (
        Number(selected.value) ==
        questions[currentQuestion].answer
    ) {

        score++;

    }


    /* Move to next question */

    currentQuestion++;


    /* Display next question */

    showQuestion();

}


/* =========================
   SUBMIT QUIZ
========================= */

function submitQuiz() {

    /* Find selected option */

    let selected =
        document.querySelector(
            'input[name="answer"]:checked'
        );


    /* Check whether answer is selected */

    if (selected == null) {

        alert("Please select an answer!");

        return;

    }


    /* Check final answer */

    if (
        Number(selected.value) ==
        questions[currentQuestion].answer
    ) {

        score++;

    }


    /* Get student details */

    let name =
        document.getElementById("fullname").value;

    let roll =
        document.getElementById("rollno").value;

    let section =
        document.getElementById("section").value;


    /* Hide quiz page */

    document.getElementById("quizPage").style.display =
        "none";


    /* Show result page */

    document.getElementById("resultPage").style.display =
        "block";


    /* Display name */

    document.getElementById("studentResult").textContent =
        "Well done, " + name + "!";


    /* Display roll number */

    document.getElementById("resultRollNo").textContent =
        roll;


    /* Display section */

    document.getElementById("resultSection").textContent =
        section;


    /* Display score */

    document.getElementById("finalScore").textContent =
        score + " / " + questions.length;


    /* Display result message */

    if (score >= 8) {

        document.getElementById("message").textContent =
            "Excellent performance!";

    }

    else if (score >= 5) {

        document.getElementById("message").textContent =
            "Good job! Keep practicing.";

    }

    else {

        document.getElementById("message").textContent =
            "Keep practicing and try again.";

    }

}


/* =========================
   RESTART QUIZ
========================= */

function restartQuiz() {

    /* Reset score */

    score = 0;


    /* Reset question */

    currentQuestion = 0;


    /* Hide result page */

    document.getElementById("resultPage").style.display =
        "none";


    /* Hide quiz page */

    document.getElementById("quizPage").style.display =
        "none";


    /* Show start page */

    document.getElementById("startPage").style.display =
        "block";


    /* Clear previous student details */

    document.getElementById("fullname").value = "";

    document.getElementById("rollno").value = "";

    document.getElementById("section").value = "A";

}