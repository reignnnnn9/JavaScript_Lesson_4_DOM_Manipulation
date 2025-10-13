// Content Manipulation Demo

// Get references to DOM elements we'll be working with
const demoCard = document.getElementById('demo-card');
const output = document.getElementById('output');

// Set up event listeners for all buttons
// Each button calls a different function when clicked
document.getElementById('change-text').addEventListener('click', changeText);
document.getElementById('change-html').addEventListener('click', changeHTML);
document.getElementById('toggle-style').addEventListener('click', toggleStyle);
document.getElementById('add-attribute').addEventListener('click', addAttribute);
document.getElementById('create-element').addEventListener('click', createElement);

function changeText() {
    // Using textContent (safe, no HTML parsing)
    // textContent treats everything as plain text, preventing XSS attacks
    const paragraph = demoCard.querySelector('p');
    paragraph.textContent = "Text changed using textContent, safe from XSS attacks";
    logOutput('Changed text using textContent');
};

function changeHTML() {
    // Using innerHTML (allows HTML, but be careful)
    // innerHTML parses HTML tags, but can be dangerous with user input
    const span = demoCard.querySelector('span');
    span.innerHTML = '<strong>HTML changes</strong> <em>This supports HTML tags. </em>';
    logOutput('Changed HTML using innerHTML');
};

function toggleStyle() {
    // Toggle CSS class using manual if/else instead of classList.toggle()
    // Check if the class exists then add/remove it
    if (demoCard.classList.contains('highlight')){
        demoCard.classList.remove('highlight');
    } else {
        demoCard.classList.add('highlight');
    }
    logOutput("Toggles highlight class");

    // Direct style manipulation
    // We can change styles directly using the style property
    const paragraph = demoCard.querySelector('p');
    if (paragraph.style.color === red) {
        paragraph.style.color = 'black';
    } else {
        paragraph.style.color = 'red';
    }
    logOutput("Changed paragraph color directly")
};

function addAttribute() {
    // Add/change attributes using setAttribute()
    // Attributes are key-value pairs that provide additional info
    demoCard.setAttribute('data-modified', true);
    demoCard.setAttribute('title', 'This card has been modified.');
    logOutput("Added data-modified and title attributes.");

    // Show attribute values using getAttribute()
    const modified = demoCard.getAttribute('data-modified');
    const title = demoCard.getAttribute('title');
    logOutput("Data-modified:" + modified + "Title:" + title);
};

function createElement() {
    // Create new element using createElement()
    const newDiv = document.createElement('div');
    newDiv.className = 'card new-item';
    newDiv.innerHTML = '<h3>New Element</h3><p>This element was created dynamically!</p><button onclick="this.parentElement.remove()">Remove Me</button>';

    // Add to DOM using appendChild()
    // This makes the element visible on the page
    demoCard.parentElement.appendChild(newDiv);
    logOutput("Created and added new element");
};

function logOutput(message) {
    // Helper function to display messages with timestamps
    const timestamp = new Date().toLocaleTimeString();
    output.innerHTML = output.innerHTML + '<p>[' + timestamp + '] ' + message + '</p>';
    output.scrollTop = output.scrollHeight;
};

// Inputs
function getInput() {
    const inputValue = document.getElementById('new-input').value;
    console.log(inputValue);
};