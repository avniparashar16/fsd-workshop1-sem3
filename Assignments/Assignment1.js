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

let answered = false;

let time = 120;

let timer;


/* =========================
   START QUIZ
========================= */

document.getElementById("studentForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        currentQuestion = 0;

        score = 0;

        time = 120;

        answered = false;


        document.getElementById("startPage").style.display =
            "none";

        document.getElementById("quizPage").style.display =
            "block";

        document.getElementById("resultPage").style.display =
            "none";


        document.getElementById("timer").textContent =
            "02:00";


        showQuestion();

        startTimer();

    }
);


/* =========================
   SHOW QUESTION
========================= */

function showQuestion() {

    let q = questions[currentQuestion];

    answered = false;


    /* Question number */

    document.getElementById("questionNumber").textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    /* Question */

    document.getElementById("question").textContent =
        q.question;


    /* Clear old options */

    document.getElementById("options").innerHTML = "";


    /* Clear message */

    document.getElementById("answerMessage").textContent =
        "";


    /* Disable Next */

    document.getElementById("nextButton").disabled =
        true;


    /* Create four options */

    for (let i = 0; i < q.options.length; i++) {

        let option = document.createElement("div");

        option.className = "option";

        option.textContent = q.options[i];


        /*
           Mouse click event
        */

        option.addEventListener(
            "click",
            function() {

                checkAnswer(i, option);

            }
        );


        /*
           Mouse over event
        */

        option.addEventListener(
            "mouseover",
            function() {

                if (!answered) {

                    option.style.transform =
                        "scale(1.02)";

                }

            }
        );


        /*
           Mouse out event
        */

        option.addEventListener(
            "mouseout",
            function() {

                option.style.transform =
                    "scale(1)";

            }
        );


        document.getElementById("options")
            .appendChild(option);

    }


    /* Last question */

    if (currentQuestion ==
        questions.length - 1) {

        document.getElementById("nextButton")
            .style.display = "none";

        document.getElementById("submitButton")
            .style.display = "inline-block";

    }

    else {

        document.getElementById("nextButton")
            .style.display = "inline-block";

        document.getElementById("submitButton")
            .style.display = "none";

    }

}


/* =========================
   CHECK ANSWER
========================= */

function checkAnswer(selectedAnswer, selectedOption) {

    /* Prevent selecting again */

    if (answered) {

        return;

    }


    answered = true;


    let correctAnswer =
        questions[currentQuestion].answer;


    let allOptions =
        document.getElementsByClassName("option");


    /* Correct answer */

    if (selectedAnswer == correctAnswer) {

        selectedOption.classList.add("correct");

        score++;

        document.getElementById("answerMessage")
            .textContent =
            "Correct Answer!";

    }


    /* Wrong answer */

    else {

        selectedOption.classList.add("wrong");


        document.getElementById("answerMessage")
            .textContent =
            "Wrong Answer! Correct answer is highlighted in green.";


        /* Highlight correct answer */

        allOptions[correctAnswer]
            .classList.add("correct");

    }


    /* Enable Next */

    document.getElementById("nextButton")
        .disabled = false;

}


/* =========================
   NEXT QUESTION
========================= */

function nextQuestion() {

    if (!answered) {

        alert("Please select an answer first.");

        return;

    }


    currentQuestion++;

    showQuestion();

}


/* =========================
   SUBMIT QUIZ
========================= */

function submitQuiz() {

    if (!answered) {

        alert("Please select an answer first.");

        return;

    }


    clearInterval(timer);


    /* Get student details */

    let name =
        document.getElementById("fullname").value;

    let roll =
        document.getElementById("rollno").value;

    let section =
        document.getElementById("section").value;


    /* Hide quiz */

    document.getElementById("quizPage").style.display =
        "none";


    /* Show result */

    document.getElementById("resultPage").style.display =
        "block";


    /* Display student details */

    document.getElementById("studentResult")
        .textContent =
        "Well done, " + name + "!";


    document.getElementById("resultRollNo")
        .textContent =
        roll;


    document.getElementById("resultSection")
        .textContent =
        section;


    /* Display score */

    document.getElementById("finalScore")
        .textContent =
        score + " / " + questions.length;


    /* Result message */

    if (score >= 8) {

        document.getElementById("message")
            .textContent =
            "Excellent performance!";

    }

    else if (score >= 5) {

        document.getElementById("message")
            .textContent =
            "Good job! Keep practicing.";

    }

    else {

        document.getElementById("message")
            .textContent =
            "Keep practicing and try again.";

    }

}


/* =========================
   TIMER
========================= */

function startTimer() {

    clearInterval(timer);


    timer = setInterval(
        function() {

            time--;


            let minutes =
                Math.floor(time / 60);

            let seconds =
                time % 60;


            let displayTime =
                String(minutes).padStart(2, "0")
                + ":" +
                String(seconds).padStart(2, "0");


            document.getElementById("timer")
                .textContent =
                displayTime;


            /* Time finished */

            if (time <= 0) {

                clearInterval(timer);

                alert("Time is over!");

                submitQuiz();

            }

        },
        1000
    );

}


/* =========================
   KEYBOARD EVENTS
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        /*
           Enter key
           Moves to next question
        */

        if (event.key == "Enter") {

            if (
                document.getElementById("quizPage")
                    .style.display == "block"
            ) {

                if (
                    currentQuestion <
                    questions.length - 1
                ) {

                    nextQuestion();

                }

            }

        }


        /*
           Right Arrow key
           Moves to next question
        */

        if (event.key == "ArrowRight") {

            if (
                document.getElementById("quizPage")
                    .style.display == "block"
            ) {

                if (
                    currentQuestion <
                    questions.length - 1
                ) {

                    nextQuestion();

                }

            }

        }


        /*
           Escape key
           Shows confirmation before leaving quiz
        */

        if (event.key == "Escape") {

            if (
                document.getElementById("quizPage")
                    .style.display == "block"
            ) {

                let leave =
                    confirm(
                        "Do you want to leave the quiz?"
                    );


                if (leave) {

                    clearInterval(timer);

                    restartQuiz();

                }

            }

        }

    }
);