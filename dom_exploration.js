// DOM Exploration Demo
console.log("====== DOM Exploration ======");

// 1. Access the document object*
// The document object is the root of the DOM tree
console.log("Document Object:", document);
console.log("Document Title:", document.title);

// 2. Select elements by ID*
// getElementById returns a single element or null if not found
const mainTitle = document.getElementById('main-title');
console.log("Main title element:", mainTitle);
console.log("Main title text:", mainTitle.textContent);

// 3. Select elements by class*
// getElementsByClassName returns an HTMLCollection (live collection)
const highlighted = document.getElementsByClassName("highlight");
console.log("Highlighted elements:", highlighted);
console.log("First highlighted:", highlighted[0]);

// 4. Select elements by tag name*
// getElementByTagName returns an HTMLCollection of all matching elements
const paragraphs = document.getElementsByTagName('p');
console.log("All paragraphs:", paragraphs);

// 5. Modern querySelector methods*
// querySelector returns the first matching element or Null
const container = document.querySelector(".container");
console.log("Container element:", container);
// querySelectorAll returns a NodeList of all matching elements
const allListItems = document.querySelectorAll("li");
console.log("All list items:", allListItems);

// 6. Navigate/Accessing the DOM tree*
// These properties help us move around DOM structure
console.log("Parent of the main title:", mainTitle.parentElement);
console.log("Children of container:", container.children);
console.log("First child of container:", container.firstElementChild);
console.log("Last child of container:", container.lastElementChild);