const questions =[
    {
        question: "Qual das linguagens pode ser relacionada ao esqueleto da página?",
        answers: ["HTML","CSS","JavaScript","MySql"],
        correctAnswer: 0
    },
    {
        question: "Qual das linguagens pode ser relacionada ao músculo da página?",
        answers: ["HTML","CSS","JavaScript","MySql"],
        correctAnswer: 2
    },
    {
        question: "Qual das linguagens pode ser relacionada à pele da página?",
        answers: ["HTML","CSS","JavaScript","MySql"],
        correctAnswer: 1
    },
    {
        question: "o tracho de codigo (document.getElementById) pertence a qual das linguagens?",
        answers: ["HTML","CSS","JavaScript","MySql"],
        correctAnswer: 2
    },
    {
        question: "Qual das linguagens a seguir é uma linguagem de marcação?",
        answers: ["HTML","CSS","JavaScript","MySql"],
        correctAnswer: 0
    },
    
]
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}`;
}

window.onload = loadQuestions;