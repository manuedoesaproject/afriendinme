// Array of possible answers
var answers = [
    "owes a massage to",
    "will buy a little gift to",
    "gives a compliment to",
    "gives a hug to",
    "owes a coffee to",
    "gives a hand to"
];

// Function to generate a random answer
function generateRandomAnswer(name1, name2) {
    // Generate a random index to select a random answer from the array
    var randomIndex = Math.floor(Math.random() * answers.length);
    var firstIsName1 = Math.random() < 0.5;  

    // Generate a random index to select a random answer from the array
    var randomIndex = Math.floor(Math.random() * answers.length);

    // Construct the answer using input data
    
    var answer;
    if (firstIsName1) {
        answer = name1 + " " + answers[randomIndex] + " " + name2;
    } else {
        answer = name2 + " " + answers[randomIndex] + " " + name1;
    }
    
    return answer;
}


// Display the names on the answer page with specific text for each number input
function displayDataFromUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    var inputData1 = urlParams.get('name1');
    var inputData2 = urlParams.get('name2');

    // Display the answer on the page
    var displayDiv = document.getElementById('displayData');
    if (inputData1 && inputData2) {
        var randomAnswer = generateRandomAnswer(inputData1, inputData2);
        displayDiv.textContent = randomAnswer;
    } else {
        displayDiv.textContent = "Oops! Something went wrong. Please provide both names.";
    }
}

// Call the function to display data from the URL when the document is fully loaded
document.addEventListener('DOMContentLoaded', displayDataFromUrl);

// save input data in url at button click
function saveData() {
    var userInput1 = document.getElementById('name1').value;
    var userInput2 = document.getElementById('name2').value;
    window.location.href = 'answer.html?name1=' + encodeURIComponent(userInput1) + '&name2=' + encodeURIComponent(userInput2);
}
