var cou = 0;
      const quizData = [
        {
            question: 'What year was this website created?',
            options: ['2021', '2023', '1999', '2009'],
            correctAnswer: '2023'
        },
        {
            question: 'What the name of the creator of this website?',
            options: ['Aldiyar', 'Temerlan', 'Bakhtiyar', 'Seidulla'],
            correctAnswer: 'Aldiyar'
        },
        {
            question: 'How many pages on this website?',
            options: ['1', '98', '27', '4'],
            correctAnswer: '4'
        },
        {
            question: 'What is the topic of this website?',
            options: ['News', 'Store', 'Social network', 'Entertainment'],
            correctAnswer: 'News'
        },
        {
            question: 'How many news categories does the website have?',
            options: ['11', '2', '3', '6'],
            correctAnswer: '3'
        },
        {
            question: 'What news section is not on our website?',
            options: ['Technology', 'Sports', 'Politics', 'Science'],
            correctAnswer: 'Science'
        },
        {
            question: 'Which section contains video?',
            options: ['Technology', 'Sports', 'Politics', 'Main page'],
            correctAnswer: 'Politics'
        },
        {
            question: 'Which interactive feature is available for user participation??',
            options: ['Drag and drop game', 'Chess game', 'Sport streams', 'Casino'],
            correctAnswer: 'Drag and drop game'
        },
        {
            question: 'Language of the website?',
            options: ['Kazakh', 'Russian', 'English', 'Spanish'],
            correctAnswer: 'English'
        },
        {
            question: 'How many steps in registration form on our website?',
            options: ['1', '15', '8', '2'],
            correctAnswer: '2'
        },
      ];

      const quizContainer = document.getElementById('quiz-container');
      const questionContainer = document.getElementById('question-container');
      const nextButton = document.getElementById('next-btn');

      let currentQuestionIndex = 0;

      function loadQuestion() {
          const currentQuestion = quizData[currentQuestionIndex];
          questionContainer.innerHTML = `
              <h2>${currentQuestion.question}</h2>
              <div id="options-container">
                  ${currentQuestion.options.map(option => `<button class = "btn btn-primary" onclick="checkAnswer('${option}')">${option}</button>`).join('')}
              </div>`;
      }

      function checkAnswer(userAnswer) {
          const correctAnswer = quizData[currentQuestionIndex].correctAnswer;
          if (userAnswer === correctAnswer) {
              cou++;
          } else {
          }

          currentQuestionIndex++;

          if (currentQuestionIndex < quizData.length) {
              loadQuestion();
          } else {
              quizContainer.innerHTML = '<h1>Quiz completed, you got '+cou+' answers right!</h1>';
          }
      }

      loadQuestion();


const scrollBtn = document.getElementById("scroll");
scrollBtn.addEventListener("click", function() {
      document.documentElement.scrollTop = 0;
  });

function Task(description, completed) {
    this.description = description;
    this.completed = completed;
}

function addTask() {
    //function for adding task
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        //checking if input is not empty
        var newTask = new Task(taskInput.value, false);

        var taskHTML = '<li class="list-group-item d-flex justify-content-between"> <input class="form-check-input me-1" type="checkbox" onclick="completeTask(this)"> <label class="form-check-label" for="firstCheckbox">' + newTask.description + '</label> <button type="button" class="btn btn-primary ml-9" onclick="deleteTask(this)">Delete</button> </li>';
        //adding list elements with chekbox and delete button
        taskList.innerHTML += taskHTML;

        playSound('sound.mp3');
        taskInput.value = '';
    }
}
function playSound(soundPath) {
    var audio = new Audio(soundPath);
    audio.play();
}


function completeTask(checkbox) {
    //saving checkboxex
    var taskItem = checkbox.parentNode;
    taskItem.classList.toggle('completed');
}

function deleteTask(button) {
    //deleting tasks
    var taskItem = button.parentNode;
    taskItem.parentNode.removeChild(taskItem);
}

function formValidation()
{
    document.getElementById('errorMessages').innerHTML = '';
    //retrieving element with id errorMessages
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    //setting variables values from form

    if (name === '' || email === '' || message === '') {
        //checking if input is empty
        displayError('All fields are required');
        return;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //regex for email 
    if (!emailRegex.test(email)) {
        displayError('Invalid email format');
        return;
    }
    alert('Form submitted successfully!');
}

function displayError(message) {
    //displaing error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(message));
    //creating text node with message
    errorMessages.appendChild(errorDiv);
}
function startTimer() {
    var duration = parseInt(document.getElementById('duration').value);
    //getting duration from user's input
    var timerDisplay = document.getElementById('timer');
    var startTime;
    if (isNaN(duration) || duration <= 0) {
        //checking if duration is valid number
        alert('Please enter a valid duration.');
        return;
      }

    function updateTimer(timestamp) {
        if (!startTime) startTime = timestamp;
        //calculating elsapsed time
        var elapsedTime = timestamp - startTime;
        //calculating remaining time
        var remainingTime = Math.max(0, duration - Math.floor(elapsedTime / 1000));

        if (remainingTime <= 0) {
            //displaying message when remaining time is 0
            timerDisplay.innerHTML = 'Countdown Complete!';
        } else {
            //displaying time
            timerDisplay.innerHTML = 'Time remaining: ' + remainingTime + ' seconds';
            var color;
            if (remainingTime > 10) {
                color = 'green';
            } else {
                color = 'red';
            }
            //set timer color to red if duration is less than 10

            timerDisplay.style.color = color;
            requestAnimationFrame(updateTimer);
        }
    }

    requestAnimationFrame(updateTimer);
}



function darkMode()
{
    //changing bg color
    document.body.style.backgroundColor = '#222222';
}
function lightMode()
{
    //changing bg color
    document.body.style.backgroundColor = '#E6F2FF';
}

const newsCards = document.querySelectorAll('.card');
//retrieving all cards
newsCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('hovered');
  });
  //adds event listener when mouse is pointing to the card 

  card.addEventListener('mouseleave', () => {
    card.classList.remove('hovered');
  });
  //adds event listener when mouse is not pointing to the card
});

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var draggableElement = document.getElementById(data);
    var category = event.target.closest('.category');

    if (category) {
        category.appendChild(draggableElement);
    }
}

function checkAnswers() {
    var enterCategory = document.getElementById("entertainment2");
    var sportCategory = document.getElementById("sport");

    var enterAnswers = ["title1", "title2"];
    var sportAnswers = ["title3", "title4"];

    var enterCorrect = checkCategory(enterCategory, enterAnswers);
    var sportCorrect = checkCategory(sportCategory, sportAnswers);

    if (enterCorrect && sportCorrect) {
        document.getElementById("result").innerText = "Congratulations! All answers are correct.";
    } else {
        document.getElementById("result").innerText = "Incorrect. Please try again.";
    }
}

function checkCategory(category, correctAnswers) {
    var draggedElements = category.getElementsByClassName("draggable");
    var draggedIds = Array.from(draggedElements).map(element => element.id);
    return JSON.stringify(draggedIds.sort()) === JSON.stringify(correctAnswers.sort());
}


