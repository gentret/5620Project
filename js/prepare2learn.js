const quizData = [
    {
        question: 'What does the acronym MP represent?',
        a: 'Memory Palace',
        b: 'More Popcorn',
        c: 'Mary Poppins',
        d: 'Monterey Park',
        correct: 'a'
    }, 
    {
        question: 'Where does the phrase,"In the first place" come from?',
        a: 'Dominic System',
        b: 'Memory Palace',
        c: 'Peg system',
        d: 'CSULA',
        correct: 'b'
    }, 
    {
        question: 'What type of languate is the Dominic System?',
        a: 'Spanish',
        b: 'English',
        c: 'Language of Numbers',
        d: 'JavaScript',
        correct: 'c'
    }, {
        question: 'What number does the letter A represent?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'a'
    }, {
        question: 'What number does the letter B represent?',
        a: '1',
        b: '2',
        c: '3',
        d: '5',
        correct: 'b'
    }, 
    {
        question: 'What number does the letter C represent?',
        a: '1',
        b: '2',
        c: '3',
        d: '6',
        correct: 'c'
    }, 
    {
        question: 'What number does the letter G represent?',
        a: '2',
        b: '3',
        c: '4',
        d: '7',
        correct: 'd'
    }, 
    {
        question: 'Who does the number 17 represent?',
        a: 'Al Capone',
        b: 'Antonio Banderas',
        c: 'Ariana Grande',
        d: 'Dr. Ortiz',
        correct: 'c'
    }, 
    {
        question: 'Who does the number 22 represent?',
        a: 'Bugs Bunny',
        b: 'Ben Aflec',
        c: 'Al Capone',
        d: 'James Bond',
        correct: 'a'
    }, 
    {
        question: 'Who does the number 07 represent?',
        a: 'Al Capone',
        b: 'Antonio Banderas',
        c: 'Silvester Stalone',
        d: 'James Bond',
        correct: 'd'
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
